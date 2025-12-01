import React, { useState, useEffect } from 'react';
import { Badge, Button } from 'flowbite-react';
import { HiArrowRight, HiOutlineInformationCircle, HiAcademicCap, HiChip, HiLightBulb, HiUserGroup } from 'react-icons/hi';
import { FaBrain, FaChalkboardTeacher } from 'react-icons/fa';
import { MdAssessment, MdPsychology, MdCode } from 'react-icons/md';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 opacity-10 hidden lg:block">
          <FaBrain className="text-blue-600 dark:text-blue-400 text-9xl" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 hidden lg:block">
          <HiAcademicCap className="text-blue-600 dark:text-blue-400 text-9xl" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mt-8 lg:mt-0">
              <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
                AI-Powered Education Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
                Welcome to<br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    INTELLEA
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Intelligent Teaching and Learning Enhancement Architecture - Revolutionizing education through adaptive AI, emotional intelligence, and personalized learning pathways.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  gradientDuoTone="purpleToBlue" 
                  size="lg"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <span className="flex items-center">
                    Get Started
                    <HiArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
                <Button 
                  color="light" 
                  size="lg"
                  className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-transform duration-300 hover:scale-105"
                >
                  <span className="flex items-center">
                    <HiOutlineInformationCircle className="mr-2 h-5 w-5" />
                    Learn More
                  </span>
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">AI Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              {isClient && (
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <FaBrain className="text-8xl text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Our Core Components
            </Badge>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Four Pillars of Intelligent Learning
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              INTELLEA combines cutting-edge AI technologies to deliver a comprehensive, adaptive learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ComponentCard 
              icon={<FaChalkboardTeacher className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
              title="ATLAS"
              subtitle="Adaptive Teaching & Learning"
              description="AI-powered virtual teacher using Socratic dialogue and personalized learning pathways"
            />
            <ComponentCard 
              icon={<MdPsychology className="h-8 w-8 text-purple-600 dark:text-purple-400" />}
              title="VIBE"
              subtitle="Visual Intelligence & Emotion"
              description="Real-time emotion detection adapting teaching strategies based on student engagement"
            />
            <ComponentCard 
              icon={<MdAssessment className="h-8 w-8 text-green-600 dark:text-green-400" />}
              title="SAGE"
              subtitle="Smart Assessment Engine"
              description="Multi-agent evaluation system providing comprehensive, bias-aware feedback"
            />
            <ComponentCard 
              icon={<MdCode className="h-8 w-8 text-orange-600 dark:text-orange-400" />}
              title="Code Editor"
              subtitle="Intelligent Block Editor"
              description="Visual programming with AI debugging and seamless deployment pipelines"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Platform Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Intelligent Features for Modern Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of education with our comprehensive AI-driven platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<HiChip className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
              title="Multi-Agent Orchestration"
              description="Specialized AI agents work together to provide comprehensive educational support across all learning domains."
            />
            <FeatureCard 
              icon={<HiLightBulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
              title="Adaptive Learning Paths"
              description="Personalized curriculum that adjusts to each student's pace, learning style, and emotional state."
            />
            <FeatureCard 
              icon={<HiUserGroup className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
              title="Collaborative Environment"
              description="AI-coordinated collaborative programming and group learning with intelligent task distribution."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of students and educators who are already experiencing the future of education with INTELLEA's intelligent teaching platform.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                color="light" 
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                <span className="text-blue-700 font-medium">Start Learning Now</span>
              </Button>
              <Button 
                outline
                color="light" 
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ComponentCard({ icon, title, subtitle, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-3">{title}</h3>
      </div>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{subtitle}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-3">{title}</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}