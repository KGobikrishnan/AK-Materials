import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCard = ({ src, title, initialY, delay, speed = 1 }) => {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ 
        y: [initialY, initialY - 15 * speed, initialY],
        opacity: 1
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: { duration: 1, delay: delay }
      }}
      className="absolute glass p-2 md:p-3 rounded-xl md:rounded-2xl shadow-2xl flex flex-col items-center gap-1 md:gap-2 w-20 md:w-36 lg:w-48"
      style={{
        rotateX: "10deg",
        rotateY: "-10deg",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="w-full h-16 md:h-24 lg:h-32 rounded-lg md:rounded-xl overflow-hidden shadow-inner flex-shrink-0">
        <img src={src} alt={title} className="w-full h-full object-cover scale-110" />
      </div>
      <span className="text-secondary font-bold text-[8px] md:text-xs lg:text-sm uppercase tracking-wider block mt-1 md:mt-2 text-center leading-tight">{title}</span>
    </motion.div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-400/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0"><img src="/images/hero_bg.png" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="hidden md:block absolute top-[12%] md:top-[20%] left-[2%] md:left-[10%] lg:left-[20%]">
          <FloatingCard 
            src="/images/blue_metal.jpeg" 
            title="Blue Metal" 
            initialY={20} 
            delay={0}
            speed={1.5}
          />
        </div>
        <div className="hidden md:block absolute bottom-[25%] md:bottom-[20%] right-[2%] md:right-[10%] lg:right-[20%]">
          <FloatingCard 
            src="/images/river_sand.jpeg" 
            title="River Sand" 
            initialY={-20} 
            delay={1}
            speed={1.2}
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: y1, opacity: opacityText }}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
           <span className="inline-block px-4 py-1 rounded-full glass-dark text-white text-xs font-bold tracking-widest uppercase mb-4">
             AK Materials
           </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8 drop-shadow-sm mix-blend-difference"
        >
          THE FOUNDATION OF <br className="hidden md:block"/> <span className="text-accent underline decoration-4 underline-offset-8">EVERY VISION.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-secondary max-w-2xl mx-auto font-medium"
        >
          Premium Wholesale & Retail Construction Materials. Built for weightless performance and unyielding structural integrity.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
