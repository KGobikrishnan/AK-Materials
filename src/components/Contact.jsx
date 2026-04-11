import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/images/contact.png" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white/80 to-gray-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Start Your Build With Us
          </motion.h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="glass p-8 rounded-3xl bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Head Office</h4>
              <p className="text-gray-600">42 Industrial Avenue,<br />Tech Park, District 9,<br />City, State 600001</p>
            </div>

            <div className="glass p-8 rounded-3xl bg-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 98765 43210<br />+91 98765 01234</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="glass bg-white p-4 rounded-3xl shadow-xl h-full min-h-[400px] overflow-hidden relative border border-gray-100">
              <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.1378345711!2d79.82424905!3d11.0360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5531d0dbdc4357%3A0xe2de97e412ef14db!2sA%20K%20TIMBERS%20AND%20A%20K%20MATERIALS%2C%20MAYILADUTHURAI!5e0!3m2!1sen!2sin!4v1712836270631!5m2!1sen!2sin" 
               className="absolute inset-0 w-full h-full rounded-2xl border-0" 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a href="https://maps.app.goo.gl/J8yHMDZuL4J1BZhHA" target="_blank" rel="noreferrer" className="absolute inset-0 z-10 block opacity-0">Open Map</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
