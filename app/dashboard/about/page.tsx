import React from 'react'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-8">
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-md mb-8 md:mb-0 bg-gradient-to-br from-indigo-100 to-blue-200">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Hello, I am Parshad Keni
              </h1>
              <div className="mt-3 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Full Stack Developer 
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-700">
              I am a goal oriented and versatile individual, always eager to take on new challenges. Always passionate about learning with a positive attitude and a growth mindset.
            </p>

            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/parshadk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/parshad-keni/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://x.com/_parshad_1694?t=SKi-JYEjKorpLHivugbRHg&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1I8HJBPq1ZgNAeIsiz4ZyLNrB4vV_1bDV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
              >
                Check Resume
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-md bg-gradient-to-br from-indigo-100 to-blue-200">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">About this Project: Arti5AI</h2>
            <p className="text-gray-700 mb-4">
              AI-powered content generation app  developed using Next.js, React, Tailwind CSS, TypeScript, and Google Gemini API. Focused on creating user-friendly templates and generating AI-driven content.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Authentication: Implemented secure social and email/password authentication using Clerk.</li>
              <li>Database Integration: Set up Drizzle ORM and PostgreSQL to manage and store data efficiently.</li>
              <li>AI Content Generation: Integrated Google Gemini API to create customized AI-generated content.</li>
              <li>Customizable Content : Integrated Toast UI Rich Text Editor to edit the generated content.</li>
              <li>Payment Integration: Used RazorPay to integrate payment functionality.</li>
            </ul>
            <p className="text-gray-800 font-semibold">
              Tech Stack: Next.js, React, Tailwind CSS, TypeScript, Google Gemini API, Clerk, Drizzle ORM, PostgreSQL ,RazorPay.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}