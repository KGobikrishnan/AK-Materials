import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about.png" 
                alt="AK Materials Headquarters" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1">Established 1998</p>
                <h3 className="text-2xl font-bold">AK Materials HQ</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Founding The Future of Construction</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              For over two decades, AK Materials has been the bedrock of monumental construction projects across the region. We pride ourselves on sourcing and delivering the highest grade raw materials that form the backbones of tomorrow's infrastructure.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Whether you're developing a massive commercial complex or require retail supplies for a residential build, our expansive fleet and rigorous quality checks ensure that integrity is built into every grain of sand and drop of cement we deliver.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="glass p-6 rounded-2xl border-l-4 border-accent">
                 <h4 className="text-3xl font-bold text-gray-900 mb-2">25+</h4>
                 <p className="text-sm text-gray-500 font-semibold">Years of Excellence</p>
               </div>
               <div className="glass p-6 rounded-2xl border-l-4 border-accent">
                 <h4 className="text-3xl font-bold text-gray-900 mb-2">10k+</h4>
                 <p className="text-sm text-gray-500 font-semibold">Projects Supplied</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
