import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const Toggle = ({ isWholesale, setIsWholesale }) => {
  return (
    <div className="flex justify-center mb-16">
      <div className="glass p-1 rounded-full flex relative w-[300px] shadow-sm">
        <button
          onClick={() => setIsWholesale(true)}
          className={clsx(
            "flex-1 py-3 px-6 rounded-full text-sm font-semibold z-10 transition-colors duration-300",
            isWholesale ? "text-white" : "text-secondary hover:text-gray-800"
          )}
        >
          Bulk Pricing
        </button>
        <button
          onClick={() => setIsWholesale(false)}
          className={clsx(
            "flex-1 py-3 px-6 rounded-full text-sm font-semibold z-10 transition-colors duration-300",
            !isWholesale ? "text-white" : "text-secondary hover:text-gray-800"
          )}
        >
          Retail Convenience
        </button>
        
        {/* Animated Background Pill */}
        <motion.div
          layoutId="pill"
          className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-accent rounded-full shadow-md z-0"
          initial={false}
          animate={{
            x: isWholesale ? "0%" : "100%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default Toggle;
