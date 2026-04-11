import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-widest">
              AK <span className="text-accent">MATERIALS</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium construction materials for the visionaries building tomorrow's infrastructure. Quality delivered in bulk and retail.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300 text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors duration-300 text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors duration-300 text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300 text-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#materials-section" className="hover:text-accent transition-colors">Our Materials</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About AK Groups</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Get A Quote</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Our Categories</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Premium Cements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">M.Sand & P.Sand</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gravel & Blue Metals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solid & Hollow Bricks</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>+91 98765 43210</li>
              <li>+91 98765 01234</li>
              <li>info@akmaterials.com</li>
              <li>42 Industrial Avenue, Tech Park</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AK Materials. All rights reserved.
          </p>
          
          {/* Unique "Designed by Navi" Promotion */}
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="text-xs font-medium text-gray-400 mr-2 z-10">Digital Experience Crafted By</span>
            <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 z-10 font-[Inter] tracking-wider relative">
              <span className="absolute -inset-1 bg-white/20 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
              NAVI
            </span>
            <svg className="w-4 h-4 ml-2 text-pink-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
