import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { 
  HiUser, 
  HiMail, 
  HiPhone, 
  HiChat, 
  HiCheck,
  HiOutlineQuestionMarkCircle,
  HiArrowRight
} from "react-icons/hi";
import { FaBrain, FaRobot, FaChalkboardTeacher } from "react-icons/fa";
import { MdRecycling } from "react-icons/md";

export default function ContactUs() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    userid: "guest",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("Please fill out all the fields");
      return;
    }
    try {
      setLoading(true);
      setErrorMessage("");
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLoading(false);
      setSuccessMessage("Your inquiry has been submitted successfully! Our team will respond within 24 hours.");
      setFormData({
        userid: "guest",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <h1 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-400 mb-6">
          Connect with INTELLEA
        </h1>
        <p className="text-xl text-center text-blue-700 dark:text-blue-300 mb-8 max-w-2xl mx-auto">
          Questions about our AI-powered education platform? We're here to help transform your learning experience!
        </p>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 opacity-10 hidden lg:block">
          <FaBrain className="text-blue-600 dark:text-blue-400 text-9xl" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10 hidden lg:block">
          <FaChalkboardTeacher className="text-blue-600 dark:text-blue-400 text-9xl" />
        </div>
        <div className="absolute bottom-1/4 left-10 opacity-10 hidden lg:block">
          <FaRobot className="text-blue-600 dark:text-blue-400 text-6xl" />
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 hidden lg:block">
          <MdRecycling className="text-blue-600 dark:text-blue-400 text-6xl" />
        </div>
        
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Info */}
            <div className="flex-1 p-8 md:p-12 bg-gradient-to-br from-blue-700 to-purple-800 dark:from-blue-900 dark:to-purple-900 text-white">
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <FaBrain className="text-4xl mr-3" />
                  <span className="font-bold text-3xl">INTELLEA</span>
                </div>
                <p className="text-blue-100 mt-4 text-lg">
                  Intelligent Teaching and Learning Enhancement Architecture
                </p>
              </div>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-300 flex items-center justify-center">
                    <HiCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4 text-lg">Adaptive AI-powered teaching</div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-300 flex items-center justify-center">
                    <HiCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4 text-lg">Emotion-aware learning pathways</div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-300 flex items-center justify-center">
                    <HiCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4 text-lg">Intelligent assessment & feedback</div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-300 flex items-center justify-center">
                    <HiCheck className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4 text-lg">Block-based programming with AI</div>
                </div>
                
                {isClient && (
                  <div className="mt-12 pt-6 border-t border-blue-600 dark:border-blue-700">
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-xl font-semibold">Research & Development</h3>
                      <p>SLIIT Faculty of Computing</p>
                      <p>Project ID: 25-26J-506</p>
                      <p>contact@intellea.ai</p>
                      <p>+94 11 234 5678</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="flex-1 p-8 md:p-12 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" value="Your Name" className="text-gray-700 dark:text-gray-300 font-medium" />
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiUser className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <TextInput
                      type="text"
                      id="name"
                      className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" value="Your Email" className="text-gray-700 dark:text-gray-300 font-medium" />
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiMail className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <TextInput
                      type="email"
                      id="email"
                      className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" value="Your Phone Number" className="text-gray-700 dark:text-gray-300 font-medium" />
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiPhone className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <TextInput
                      type="tel"
                      id="phone"
                      className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="+94 70 100 0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" value="Your Message" className="text-gray-700 dark:text-gray-300 font-medium" />
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <HiChat className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <Textarea
                      id="message"
                      rows={4}
                      className="pl-10 w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Tell us about your interest in INTELLEA or ask any questions..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full transition-all duration-300 transform hover:scale-105"
                  gradientDuoTone="purpleToBlue"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" />
                      <span className="pl-3">Sending...</span>
                    </>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Submit Inquiry</span>
                      <HiArrowRight className="ml-2" />
                    </div>
                  )}
                </Button>
              </div>
              
              {successMessage && (
                <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-900 p-4 border border-green-200 dark:border-green-700">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <HiCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">{successMessage}</p>
                      <p className="mt-2 text-sm text-green-700 dark:text-green-300">Our AI education specialists will review your inquiry promptly.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {errorMessage && (
                <Alert color="failure" className="mt-5">
                  {errorMessage}
                </Alert>
              )}
              
              <div className="flex items-center gap-2 text-sm mt-6 text-gray-600 dark:text-gray-400 justify-center">
                <HiOutlineQuestionMarkCircle className="text-blue-500 dark:text-blue-400" />
                <span>Have questions about our AI platform?</span>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  Visit FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            title="AI-Powered Support"
            description="Get expert guidance on implementing INTELLEA's adaptive learning systems"
            icon={<FaBrain className="h-8 w-8 text-blue-700 dark:text-blue-400" />}
          />
          <FeatureCard 
            title="24-Hour Response"
            description="We aim to respond to all inquiries within 24 hours during business days"
            icon={<HiCheck className="h-8 w-8 text-blue-700 dark:text-blue-400" />}
          />
          <FeatureCard 
            title="Personalized Solutions"
            description="Customized AI education strategies for your specific learning needs"
            icon={<FaChalkboardTeacher className="h-8 w-8 text-blue-700 dark:text-blue-400" />}
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 ml-3">{title}</h3>
      </div>
      <p className="text-blue-700 dark:text-blue-200">{description}</p>
    </div>
  );
}