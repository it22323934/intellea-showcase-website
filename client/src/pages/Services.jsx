import React from 'react';
import { Badge, Button, Card } from 'flowbite-react';
import { FaBrain, FaRobot, FaChalkboardTeacher, FaCheckCircle, FaMobileAlt } from 'react-icons/fa';
import { MdRecycling, MdAnalytics, MdPsychology, MdAssessment, MdCode, MdOutlineEco } from 'react-icons/md';
import { HiArrowRight, HiCollection, HiGlobe } from 'react-icons/hi';
import { RiGovernmentLine, RiBuilding2Line } from 'react-icons/ri';

export default function Services() {
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Comprehensive <span className="text-blue-600 dark:text-blue-400">AI-Powered Learning</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From adaptive teaching to intelligent assessment to block-based programming, INTELLEA provides end-to-end AI services designed to transform education and maximize learning outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Core Components
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Four Integrated AI Systems
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each component leverages specialized AI agents working together to deliver personalized, emotion-aware, and comprehensive learning experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ATLAS */}
            <Card className="transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <FaChalkboardTeacher className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-3">ATLAS</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Adaptive Teaching and Learning Assessment System</p>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Virtual AI teacher using Socratic dialogue to guide students through personalized learning pathways, dynamically adapting content complexity and teaching methodology to individual needs.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Knowledge Base Constructor with multi-format support</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Socratic questioning & constructivist learning</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Adaptive scaffolding & personalized pathways</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Assignment creation with Bloom's Taxonomy</span>
                </li>
              </ul>
              <Button color="light" className="mt-auto w-full">
                <span className="text-blue-600">Learn More</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Card>
            
            {/* VIBE */}
            <Card className="transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <MdPsychology className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-3">VIBE</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Visual Intelligence & Behavioral Emotion Engine</p>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Real-time emotion recognition system that detects student engagement, frustration, and comprehension through facial expressions, voice patterns, and behavioral cues to adapt teaching strategies.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Multi-modal emotion detection (face, voice, behavior)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Student level categorization (beginner/advanced)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Adaptive 3D avatar interactions</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Continuous engagement monitoring</span>
                </li>
              </ul>
              <Button color="light" className="mt-auto w-full">
                <span className="text-blue-600">Learn More</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Card>
            
            {/* SAGE */}
            <Card className="transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                  <MdAssessment className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-3">SAGE</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Smart Assessment and Grading Engine</p>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Multi-agent evaluation framework that assesses objective questions, subjective answers, and coding assignments with sophisticated bias detection and comprehensive feedback generation.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Multi-domain assessment (MCQ, text, code)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Dynamic test case generation for code evaluation</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Bias-aware feedback & fairness metrics</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Multi-language code support</span>
                </li>
              </ul>
              <Button color="light" className="mt-auto w-full">
                <span className="text-blue-600">Learn More</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Card>
            
            {/* Intelligent Code Editor */}
            <Card className="transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <MdCode className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-3">Code Editor</h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">Intelligent Block-Based Programming Environment</p>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                Visual programming platform combining block-based coding with AI-powered debugging, explainable code translation, and complete iOS/Android deployment pipelines for real-world applications.
              </p>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Block-to-text translation (Python/JavaScript)</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">AI-powered debugging with "repair blocks"</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Real-world app deployment pipeline</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">Collaborative programming with AI coordination</span>
                </li>
              </ul>
              <Button color="light" className="mt-auto w-full">
                <span className="text-blue-600">Learn More</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Target Sectors */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
              Target Sectors
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Solutions for Every Learning Environment
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              INTELLEA's AI-powered platform adapts to the unique needs of different educational contexts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <RiBuilding2Line className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">K-12 & Higher Education</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Personalized learning pathways for schools and universities, supporting diverse student populations with adaptive content and emotional intelligence.
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
                  Explore Solutions <HiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <FaBrain className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Corporate Training</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  AI-driven professional development programs with intelligent assessment and personalized upskilling pathways for enterprise teams.
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
                  Explore Solutions <HiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 -mt-10 -mr-10 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <RiGovernmentLine className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Special Education</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Emotion-aware adaptive learning specifically designed for neurodivergent learners with individualized support and real-time engagement monitoring.
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center">
                  Explore Solutions <HiArrowRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Stack */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge color="info" className="mb-4 px-3 py-1.5 text-xs font-medium">
                Technology Stack
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Powered by Cutting-Edge AI
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  INTELLEA integrates the latest advances in AI and machine learning to deliver unparalleled educational experiences.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <FaBrain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">LangGraph & Multi-Agent Systems</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Orchestrating specialized AI agents for comprehensive learning support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <MdAnalytics className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Qdrant Vector Databases</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Semantic search and knowledge retrieval at scale</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <FaRobot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Mistral 7B-Instruct</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Advanced LLM for question generation and adaptive dialogue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <MdPsychology className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">CNN/RNN Emotion Models</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time facial expression and voice emotion recognition</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <span className="flex items-center">
                    View Documentation
                    <HiArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
                <Button
                  color="light"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <span className="text-gray-700 dark:text-white">Technical Details</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-100 dark:bg-blue-900/20 p-8 rounded-lg flex justify-center items-center">
              <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-4">
                  <div className="flex items-center mb-3">
                    <FaChalkboardTeacher className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="font-semibold">ATLAS</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-11/12"></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-4">
                  <div className="flex items-center mb-3">
                    <MdPsychology className="h-6 w-6 text-purple-600 mr-2" />
                    <span className="font-semibold">VIBE</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 w-10/12"></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-4">
                  <div className="flex items-center mb-3">
                    <MdAssessment className="h-6 w-6 text-green-600 mr-2" />
                    <span className="font-semibold">SAGE</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 w-full"></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                  <div className="flex items-center mb-3">
                    <MdCode className="h-6 w-6 text-orange-600 mr-2" />
                    <span className="font-semibold">Code Editor</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 w-9/12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-purple-900 dark:from-blue-800 dark:to-purple-950 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Educational Experience?</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Discover how INTELLEA's AI-powered platform can revolutionize learning for your students, organization, or institution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              color="light" 
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
            >
              <span className="text-blue-700 font-medium">Request a Demo</span>
            </Button>
            <Button 
              outline
              color="light" 
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
            >
              <span>Contact Sales</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}