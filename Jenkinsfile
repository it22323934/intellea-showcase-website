pipeline {
    agent any
    
    environment {
        AWS_REGION = 'us-east-1'  // Change to your AWS region
        ECR_REGISTRY = '322736531412.dkr.ecr.us-east-1.amazonaws.com'  // Replace with your ECR registry URL
        ECR_REPOSITORY = 'intellea-showcase'
        ECS_CLUSTER = 'intellea-showcase-website'  // Replace with your ECS cluster name
        ECS_SERVICE = 'intellea-showcase-task-service-2cb0s57h'  // Replace with your ECS service name
        ECS_TASK_DEFINITION = 'intellea-showcase-task'  // Replace with your task definition family name
        IMAGE_TAG = "${env.BUILD_NUMBER}"
        AWS_CREDENTIALS_ID = 'aws-credentials'  // Jenkins credential ID for AWS
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from GitHub...'
                git branch: 'master',
                    credentialsId: 'github-access-credentials',
                    url: 'https://github.com/it22323934/intellea-showcase-website.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image: ${ECR_REPOSITORY}:${IMAGE_TAG}"
                    sh """
                        docker build -t ${ECR_REPOSITORY}:${IMAGE_TAG} .
                        docker tag ${ECR_REPOSITORY}:${IMAGE_TAG} ${ECR_REPOSITORY}:latest
                    """
                }
            }
        }
        
        stage('Push to ECR') {
            steps {
                script {
                    withAWS(credentials: AWS_CREDENTIALS_ID, region: AWS_REGION) {
                        // Login to ECR
                        sh """
                            aws ecr get-login-password --region ${AWS_REGION} | \
                            docker login --username AWS --password-stdin ${ECR_REGISTRY}
                        """
                        
                        // Tag and push image
                        sh """
                            docker tag ${ECR_REPOSITORY}:${IMAGE_TAG} ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}
                            docker tag ${ECR_REPOSITORY}:${IMAGE_TAG} ${ECR_REGISTRY}/${ECR_REPOSITORY}:latest
                            docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}
                            docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:latest
                        """
                    }
                }
            }
        }
        
        stage('Deploy to ECS') {
            steps {
                script {
                    withAWS(credentials: AWS_CREDENTIALS_ID, region: AWS_REGION) {
                        // Update ECS service to use new image
                        sh """
                            # Get current task definition
                            TASK_DEFINITION=\$(aws ecs describe-task-definition \
                                --task-definition ${ECS_TASK_DEFINITION} \
                                --query 'taskDefinition' --region ${AWS_REGION})
                            
                            # Create new task definition with updated image
                            NEW_TASK_DEF=\$(echo \$TASK_DEFINITION | jq --arg IMAGE "${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}" \
                                '.containerDefinitions[0].image = \$IMAGE | 
                                 del(.taskDefinitionArn, .revision, .status, .requiresAttributes, .compatibilities, .registeredAt, .registeredBy)')
                            
                            # Register new task definition
                            NEW_REVISION=\$(aws ecs register-task-definition \
                                --cli-input-json "\$NEW_TASK_DEF" \
                                --region ${AWS_REGION} \
                                --query 'taskDefinition.revision' \
                                --output text)
                            
                            echo "New task definition revision: \$NEW_REVISION"
                            
                            # Update ECS service
                            aws ecs update-service \
                                --cluster ${ECS_CLUSTER} \
                                --service ${ECS_SERVICE} \
                                --task-definition ${ECS_TASK_DEFINITION}:\$NEW_REVISION \
                                --force-new-deployment \
                                --region ${AWS_REGION}
                            
                            echo "Service updated successfully"
                        """
                    }
                }
            }
        }
        
        stage('Wait for Deployment') {
            steps {
                script {
                    withAWS(credentials: AWS_CREDENTIALS_ID, region: AWS_REGION) {
                        sh """
                            aws ecs wait services-stable \
                                --cluster ${ECS_CLUSTER} \
                                --services ${ECS_SERVICE} \
                                --region ${AWS_REGION}
                            
                            echo "Deployment completed successfully!"
                        """
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
            echo "Deployed image: ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            // Clean up Docker images to save space
            sh 'docker image prune -f'
            // Clean workspace
            cleanWs()
        }
    }
}