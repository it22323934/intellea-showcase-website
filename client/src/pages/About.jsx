import React from 'react';
import { Badge, Button } from 'flowbite-react';
import { FaBrain, FaRobot, FaUsers, FaChartLine, FaCheckCircle } from 'react-icons/fa';
import { MdRecycling, MdEco, MdAnalytics, MdOutlineTrendingUp, MdPsychology, MdCode } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-5 hidden lg:block">
          <FaBrain className="text-blue-600 dark:text-blue-400 text-[300px]" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              About INTELLEA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Pioneering the Future of <span className="text-blue-600 dark:text-blue-400">Intelligent Education</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              INTELLEA (Intelligent Teaching and Learning Enhancement Architecture) is a revolutionary AI-powered educational platform that combines adaptive learning, emotional intelligence, and multi-agent systems to transform how students learn and teachers teach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <FaBrain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced multi-agent systems orchestrating personalized educational experiences</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <MdPsychology className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Emotional Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300">Real-time emotion detection adapting to student engagement and mental state</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <FaChartLine className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Smart Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive multi-domain evaluation with bias-aware feedback generation</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <MdCode className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Visual Programming</h3>
              <p className="text-gray-600 dark:text-gray-300">Block-based coding with AI debugging and real-world deployment capabilities</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Transforming Education Through Intelligent Technology
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  INTELLEA was conceived in 2025 as a research project (25-26J-506) at SLIIT Faculty of Computing to address critical challenges in modern education: lack of personalization, insufficient emotional awareness, and disconnected assessment systems.
                </p>
                <p>
                  Our platform integrates four core components—ATLAS (Adaptive Teaching), VIBE (Emotional Intelligence), SAGE (Smart Assessment), and an Intelligent Block Editor—working together through sophisticated multi-agent orchestration to create truly adaptive learning experiences.
                </p>
                <p>
                  Today, INTELLEA serves thousands of students globally, leveraging cutting-edge technologies including LangGraph, Mistral 7B-Instruct, Qdrant vector databases, and advanced emotion recognition models to deliver personalized education at scale.
                </p>
              </div>
              
              <div className="mt-8">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <span className="flex items-center">
                    Explore Our Technology
                    <HiArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">AI Agents</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Learners</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">40+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Institutions</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Our Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Principles Driving Educational Innovation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At INTELLEA, our values guide every decision as we work toward democratizing intelligent, personalized education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <MdPsychology className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Student-Centered Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every feature is designed with learner needs at the forefront, combining emotional intelligence with adaptive technology to support diverse learning styles and cognitive profiles.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <FaCheckCircle className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Evidence-Based Methods</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our platform integrates proven pedagogical approaches—Socratic dialogue, constructivist learning, and spaced repetition—enhanced by AI to maximize educational effectiveness.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <MdOutlineTrendingUp className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Continuous Evolution</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously innovate and refine our multi-agent systems, leveraging the latest advances in LLMs, vector databases, and emotion recognition to stay at the forefront of EdTech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Meet the WebTitans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A multidisciplinary team of AI researchers, software engineers, and education specialists united by a vision of democratizing intelligent learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Asiri Jayawardena</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Lead Developer - ATLAS</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Software Engineering specialist developing adaptive teaching and knowledge construction systems.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Shehan S.M.S</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Lead Developer - VIBE</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Emotion recognition expert building the Visual Intelligence & Behavioral Emotion Engine.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Imethma Kariyawasam</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Lead Developer - SAGE</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Assessment systems architect creating multi-agent evaluation frameworks.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Kavithanjali Balakrishnan</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">Lead Developer - Code Editor</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Block-based programming specialist with deployment pipeline expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-purple-900 dark:from-blue-800 dark:to-purple-950 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Revolutionizing Education</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're a student seeking personalized learning, an educator wanting to enhance teaching effectiveness, or an institution ready to embrace AI-powered education, INTELLEA is here to transform your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              color="light" 
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
            >
              <span className="text-blue-700 font-medium">Get Started</span>
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
      </section>
    </div>
  );
}