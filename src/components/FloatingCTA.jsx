import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

const FloatingCTA = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.button
      style={{ y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:flex fixed bottom-8 right-8 z-50 bg-accent text-white px-6 py-4 rounded-full shadow-2xl items-center gap-3 font-semibold tracking-wide hover:shadow-[0_10px_40px_rgba(225,29,72,0.4)] transition-shadow duration-300 group"
    >
      <MessageSquareText size={20} className="group-hover:rotate-12 transition-transform" />
      <span>Get Quote</span>
    </motion.button>
  );
};

export default FloatingCTA;
