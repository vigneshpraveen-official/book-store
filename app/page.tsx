import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BooksSection from './components/BooksSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <BooksSection />
      
      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
              About BookVault
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Revolutionizing the way you discover and enjoy books
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 px-4 lg:px-0">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Your Digital Reading Companion
              </h3>
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                BookVault is more than just an online bookstore. We're your gateway to 
                endless literary adventures, offering a curated collection of books 
                across all genres and categories.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 gradient-blue rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Vast Collection</h4>
                    <p className="text-gray-400 text-sm">Over 10,000 books across all genres</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 gradient-blue rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instant Access</h4>
                    <p className="text-gray-400 text-sm">Download and start reading immediately</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 gradient-blue rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Personalized Recommendations</h4>
                    <p className="text-gray-400 text-sm">AI-powered suggestions based on your preferences</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 gradient-blue-dark rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v2h8v-2H8zm0 4v2h8v-2H8z"/>
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-blue rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-blue-light rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="text-center px-4">
              <div className="w-18 h-18 lg:w-20 lg:h-20 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-blue">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Email Us</h3>
              <p className="text-gray-400 text-base lg:text-lg">support@bookvault.com</p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-18 h-18 lg:w-20 lg:h-20 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-blue">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Call Us</h3>
              <p className="text-gray-400 text-base lg:text-lg">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center px-4">
              <div className="w-18 h-18 lg:w-20 lg:h-20 gradient-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-blue">
                <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Visit Us</h3>
              <p className="text-gray-400 text-base lg:text-lg">123 Book Street, Reading City</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gradient mb-6">BookVault</h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                Your premier destination for digital books. Discover, read, and explore 
                thousands of titles from bestsellers to hidden gems.
              </p>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg lg:text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-base">Home</a></li>
                <li><a href="#books" className="text-gray-400 hover:text-white transition-colors text-base">Books</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-base">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-base">Contact</a></li>
              </ul>
            </div>
            
            {/* Categories */}
            <div className="text-center md:text-left">
              <h4 className="text-lg lg:text-xl font-semibold text-white mb-6">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Fiction</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Business</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Science</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8 lg:pt-10 text-center">
            <p className="text-gray-400 text-base lg:text-lg">
              © 2024 BookVault. All rights reserved. Built with ❤️ for book lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
