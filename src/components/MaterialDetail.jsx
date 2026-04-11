import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const MaterialDetail = ({ material, setSelectedMaterial }) => {
  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
      {/* Background Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedMaterial(null)}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-md pointer-events-auto"
      />

      <motion.div 
        layoutId={`card-${material.id}`}
        className="bg-white rounded-3xl w-full max-w-5xl h-full max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row pointer-events-auto"
      >
        <button 
          onClick={() => setSelectedMaterial(null)}
          className="absolute top-6 right-6 z-20 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-800" />
        </button>

        <motion.div 
          layoutId={`image-${material.id}`}
          className="w-full md:w-1/2 h-64 md:h-full relative"
        >
          <img 
            src={material.imageUrl} 
            alt={material.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-8 text-white"
          >
            <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-white/80">{material.category}</span>
            <h2 className="text-4xl font-black">{material.title}</h2>
          </motion.div>
        </motion.div>

        <motion.div 
          layoutId={`content-${material.id}`}
          className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h3>
          <p className="text-lg text-secondary leading-relaxed mb-8">
            {material.description}
          </p>

          <div className="mb-10">
            <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Available Variations</h4>
            <div className="grid grid-cols-2 gap-3">
              {material.types.map((type, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-gray-700 font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold tracking-wide hover:bg-gray-800 transition-colors">
              Request Specific Quote
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MaterialDetail;
