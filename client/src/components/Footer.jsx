import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaBrain, FaRobot, FaChalkboardTeacher } from "react-icons/fa";
import { MdPsychology, MdAssessment, MdCode } from "react-icons/md";

export default function FooterComp() {
  return (
    <Footer container className="border-t-8 border-blue-600 dark:border-blue-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mb-8 md:mb-0">
            <div className="self-center flex items-center text-lg sm:text-xl font-bold dark:text-white mb-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <FaBrain className="mr-2 text-blue-600 dark:text-blue-400" />
              <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg text-white">
                INTEL
              </span>
              <span className="text-blue-700 dark:text-blue-400 ml-1">LEA</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-xs mt-3 mb-5">
              Intelligent Teaching and Learning Enhancement Architecture - Transforming education through AI-powered adaptive learning.
            </p>
            
            <div className="flex gap-3 mt-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                <FaChalkboardTeacher className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                <MdPsychology className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                <MdAssessment className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full">
                <MdCode className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-10">
            <div>
              <Footer.Title title="Platform" className="text-blue-700 dark:text-blue-400" />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link 
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Footer.Link>
                <Footer.Link 
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About INTELLEA
                </Footer.Link>
                <Footer.Link 
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Services
                </Footer.Link>
                <Footer.Link 
                  href="/contact-us"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Components" className="text-blue-700 dark:text-blue-400" />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link 
                  href="/atlas"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ATLAS
                </Footer.Link>
                <Footer.Link 
                  href="/vibe"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  VIBE
                </Footer.Link>
                <Footer.Link 
                  href="/sage"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  SAGE
                </Footer.Link>
                <Footer.Link 
                  href="/code-editor"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Code Editor
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="text-blue-700 dark:text-blue-400" />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link 
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link 
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Footer.Link>
                <Footer.Link 
                  href="/research"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Research Ethics
                </Footer.Link>
                <Footer.Link 
                  href="/accessibility"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Accessibility
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        
        <Footer.Divider className="my-6 border-gray-200 dark:border-gray-700" />
        
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="INTELLEA™ | SLIIT Faculty of Computing"
            year={new Date().getFullYear()}
            className="text-gray-600 dark:text-gray-400"
          />
          
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Footer.Icon 
              href="#" 
              icon={BsFacebook}
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            />
            <Footer.Icon 
              href="#" 
              icon={BsTwitter}
              className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
            />
            <Footer.Icon 
              href="#" 
              icon={BsInstagram}
              className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
            />
            <Footer.Icon 
              href="https://www.linkedin.com/in/asiri-jayawardena-5707a3282?originalSubdomain=lk" 
              icon={BsLinkedin}
              className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
            />
            <Footer.Icon 
              href="https://github.com/it22323934/" 
              icon={BsGithub}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            />
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">Project ID: 25-26J-506 | Research & Development</p>
          <p>Designed & Developed by Team WebTitans | Advancing AI-powered education</p>
        </div>
      </div>
    </Footer>
  );
}