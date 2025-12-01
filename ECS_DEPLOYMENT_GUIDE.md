# ECS Deployment Guide for IntelLea Showcase

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **Jenkins Server** configured and running
3. **Docker** installed on Jenkins agents
4. **AWS CLI** installed on Jenkins agents
5. **Jenkins Plugins**:
   - Docker Pipeline
   - AWS Steps
   - Pipeline AWS

## AWS Setup

### 1. Create ECR Repository

```bash
aws ecr create-repository \
    --repository-name intellea-showcase \
    --region us-east-1
```

Note the repository URI: `<account-id>.dkr.ecr.us-east-1.amazonaws.com/intellea-showcase`

### 2. Create ECS Cluster

```bash
aws ecs create-cluster \
    --cluster-name intellea-cluster \
    --region us-east-1
```

### 3. Create CloudWatch Log Group

```bash
aws logs create-log-group \
    --log-group-name /ecs/intellea-showcase \
    --region us-east-1
```

### 4. Create IAM Roles

#### Task Execution Role (ecsTaskExecutionRole)

```bash
aws iam create-role \
    --role-name ecsTaskExecutionRole \
    --assume-role-policy-document file://task-execution-assume-role.json

aws iam attach-role-policy \
    --role-name ecsTaskExecutionRole \
    --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy
```

Create `task-execution-assume-role.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

#### Task Role (ecsTaskRole)

```bash
aws iam create-role \
    --role-name ecsTaskRole \
    --assume-role-policy-document file://task-execution-assume-role.json
```

### 5. Register Task Definition

Update `task-definition.json` with your account ID and region, then:

```bash
aws ecs register-task-definition \
    --cli-input-json file://task-definition.json \
    --region us-east-1
```

### 6. Create Application Load Balancer (ALB)

```bash
# Create security group for ALB
aws ec2 create-security-group \
    --group-name intellea-alb-sg \
    --description "Security group for IntelLea ALB" \
    --vpc-id <your-vpc-id>

# Allow HTTP traffic
aws ec2 authorize-security-group-ingress \
    --group-id <alb-sg-id> \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

# Create ALB
aws elbv2 create-load-balancer \
    --name intellea-alb \
    --subnets <subnet-1> <subnet-2> \
    --security-groups <alb-sg-id> \
    --scheme internet-facing \
    --type application
```

### 7. Create Target Group

```bash
aws elbv2 create-target-group \
    --name intellea-tg \
    --protocol HTTP \
    --port 80 \
    --vpc-id <your-vpc-id> \
    --target-type ip \
    --health-check-path /health \
    --health-check-interval-seconds 30 \
    --health-check-timeout-seconds 5 \
    --healthy-threshold-count 2 \
    --unhealthy-threshold-count 3
```

### 8. Create Listener

```bash
aws elbv2 create-listener \
    --load-balancer-arn <alb-arn> \
    --protocol HTTP \
    --port 80 \
    --default-actions Type=forward,TargetGroupArn=<target-group-arn>
```

### 9. Create ECS Service

```bash
aws ecs create-service \
    --cluster intellea-cluster \
    --service-name intellea-service \
    --task-definition intellea-task \
    --desired-count 2 \
    --launch-type FARGATE \
    --network-configuration "awsvpcConfiguration={subnets=[<subnet-1>,<subnet-2>],securityGroups=[<ecs-sg-id>],assignPublicIp=ENABLED}" \
    --load-balancers "targetGroupArn=<target-group-arn>,containerName=intellea-container,containerPort=80" \
    --region us-east-1
```

## Jenkins Setup

### 1. Configure AWS Credentials in Jenkins

1. Go to Jenkins → Manage Jenkins → Manage Credentials
2. Add new credentials:
   - Kind: AWS Credentials
   - ID: `aws-credentials`
   - Access Key ID: Your AWS Access Key
   - Secret Access Key: Your AWS Secret Key

### 2. Configure Jenkins Pipeline

1. Create a new Pipeline job in Jenkins
2. Configure the pipeline to use the `Jenkinsfile` from your repository
3. Set up webhook triggers (optional) for automatic builds on git push

### 3. Update Jenkinsfile Environment Variables

Edit the `Jenkinsfile` and replace:
- `<your-account-id>` with your AWS account ID
- Update `AWS_REGION` if using a different region
- Update cluster, service, and task definition names if you changed them

## Deployment Process

### Manual Build

```bash
# Build Docker image locally
docker build -t intellea-showcase:latest .

# Tag for ECR
docker tag intellea-showcase:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/intellea-showcase:latest

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

# Push to ECR
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/intellea-showcase:latest
```

### Jenkins Pipeline

The pipeline automatically:
1. Checks out code from repository
2. Runs linting tests
3. Builds Docker image
4. Pushes image to ECR with build number tag
5. Updates ECS task definition
6. Deploys new version to ECS
7. Waits for deployment to stabilize

## Monitoring

### View Service Status

```bash
aws ecs describe-services \
    --cluster intellea-cluster \
    --services intellea-service \
    --region us-east-1
```

### View Task Status

```bash
aws ecs list-tasks \
    --cluster intellea-cluster \
    --service-name intellea-service \
    --region us-east-1
```

### View Logs

```bash
# Get log stream names
aws logs describe-log-streams \
    --log-group-name /ecs/intellea-showcase \
    --order-by LastEventTime \
    --descending \
    --max-items 1

# View logs
aws logs tail /ecs/intellea-showcase --follow
```

## Troubleshooting

### Task Fails to Start

1. Check task execution role has ECR pull permissions
2. Verify security group allows outbound internet access
3. Check CloudWatch logs for error messages

### Health Check Failures

1. Verify `/health` endpoint is accessible
2. Check security group rules allow traffic on port 80
3. Review health check settings in target group

### Deployment Takes Too Long

1. Check if old tasks are draining properly
2. Verify new tasks are passing health checks
3. Review ECS service events

## Scaling

### Manual Scaling

```bash
aws ecs update-service \
    --cluster intellea-cluster \
    --service intellea-service \
    --desired-count 4
```

### Auto Scaling (Application Auto Scaling)

```bash
# Register scalable target
aws application-autoscaling register-scalable-target \
    --service-namespace ecs \
    --resource-id service/intellea-cluster/intellea-service \
    --scalable-dimension ecs:service:DesiredCount \
    --min-capacity 2 \
    --max-capacity 10

# Create scaling policy
aws application-autoscaling put-scaling-policy \
    --service-namespace ecs \
    --resource-id service/intellea-cluster/intellea-service \
    --scalable-dimension ecs:service:DesiredCount \
    --policy-name cpu-scaling-policy \
    --policy-type TargetTrackingScaling \
    --target-tracking-scaling-policy-configuration file://scaling-policy.json
```

## Cost Optimization

1. Use Fargate Spot for non-production environments
2. Right-size your tasks (CPU/Memory)
3. Implement auto-scaling to match demand
4. Use ECR lifecycle policies to clean old images
5. Set up CloudWatch alarms for cost monitoring

## Security Best Practices

1. Use secrets manager for sensitive data
2. Enable CloudTrail for audit logging
3. Implement least privilege IAM policies
4. Use VPC endpoints for ECR and CloudWatch
5. Enable encryption at rest and in transit
6. Regularly update base images
7. Scan images for vulnerabilities

## Rollback

If deployment fails:

```bash
# List task definition revisions
aws ecs list-task-definitions --family-prefix intellea-task

# Rollback to previous revision
aws ecs update-service \
    --cluster intellea-cluster \
    --service intellea-service \
    --task-definition intellea-task:<previous-revision>
```

## Additional Resources

- [ECS Best Practices](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/intro.html)
- [Fargate Pricing](https://aws.amazon.com/fargate/pricing/)
- [Jenkins Pipeline Syntax](https://www.jenkins.io/doc/book/pipeline/syntax/)
