'use client';

import Link from 'next/link';
import { useState } from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-blue-dark opacity-10"></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-blue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 gradient-blue-light rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 gradient-blue-dark rounded-full opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-12">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 gradient-blue rounded-2xl flex items-center justify-center shadow-blue transform hover:scale-105 transition-all duration-300">
                <svg 
                  className="w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v2h8v-2H8zm0 4v2h8v-2H8z"/>
                </svg>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 gradient-blue rounded-2xl opacity-50 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Store Name */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient leading-tight">
              BookVault
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light max-w-4xl mx-auto">
              Your Digital Library Awaits
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Discover thousands of books, from bestsellers to hidden gems. 
              Immerse yourself in stories that transport you to new worlds, 
              expand your knowledge, and inspire your imagination.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <button className="group relative px-10 py-4 gradient-blue text-white font-semibold rounded-xl shadow-blue transition-all duration-300 btn-hover text-lg w-full sm:w-auto">
              <span className="relative z-10">Explore Books</span>
              <div className="absolute inset-0 gradient-blue-light opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>
            </button>
            
            <Link href="https://www.amazon.in/dp/B0FD936XK4" target="_blank" className="px-10 py-4 border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 font-semibold rounded-xl transition-all duration-300 text-lg w-full sm:w-auto">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-5xl mx-auto">
            <div className="text-center py-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-3">10K+</div>
              <div className="text-gray-400 text-sm sm:text-base lg:text-lg">Books Available</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-3">50K+</div>
              <div className="text-gray-400 text-sm sm:text-base lg:text-lg">Happy Readers</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-3">24/7</div>
              <div className="text-gray-400 text-sm sm:text-base lg:text-lg">Available Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-blue-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
