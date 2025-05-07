import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, FileText, Database } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
      {/* Left side content */}
      <div className="lg:w-1/2 text-left">
        {/* All-in-one badge */}
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4 rounded-full mb-4 shadow-lg">
          All-in-one Solution
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          Transforming Data into <span className="gradient-text">Comprehensive</span>, <span className="gradient-text">Insightful</span> Annual Reports
        </h2>
        
        {/* Description Text */}
        <p className="text-lg text-gray-300 mb-10">
          Welcome to Lumina, where we transform your institute's achievements into powerful, 
          data-driven annual reports. Simplify, analyze, and visualize your academic journey like never before.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Get Started Button */}
          <Link 
            to="/signup" 
            className="gradient-button text-white py-3 px-6 rounded-md inline-flex items-center justify-center text-lg shadow-lg"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {/* Pricing and Plans Button */}
          <Link 
            to="/pricing" 
            className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-md inline-flex items-center justify-center text-lg transition-colors"
          >
            Pricing and Plans
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <BarChart2 className="text-blue-500 mr-2 h-5 w-5" />
            <span className="text-gray-300">Data Visualization</span>
          </div>
          <div className="flex items-center">
            <FileText className="text-purple-500 mr-2 h-5 w-5" />
            <span className="text-gray-300">Automated Reports</span>
          </div>
          <div className="flex items-center">
            <Database className="text-blue-500 mr-2 h-5 w-5" />
            <span className="text-gray-300">Data Integration</span>
          </div>
        </div>
      </div>
      
      {/* Right side illustration */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-12 flex justify-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
          <div className="relative glass-card rounded-lg p-6">
            <img 
              src="/placeholder.svg?height=400&width=500" 
              alt="Data Visualization" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
