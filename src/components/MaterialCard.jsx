import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MaterialCard = ({ material, setSelectedMaterial, isWholesale }) => {
  const ref = useRef(null);
  
  // Hover Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${material.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setSelectedMaterial(material)}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="cursor-pointer glass rounded-2xl md:rounded-3xl p-2 md:p-4 flex flex-col h-full bg-white transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(75,85,99,0.2)]"
    >
      <motion.div 
        layoutId={`image-${material.id}`}
        className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm"
        style={{ transform: "translateZ(30px)" }} // 3D popup content effect
      >
        <img 
          src={material.imageUrl} 
          alt={material.title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>
      
      <motion.div 
        layoutId={`content-${material.id}`}
        className="flex flex-col flex-grow items-center text-center px-1 md:px-2"
        style={{ transform: "translateZ(20px)" }}
      >
        <span className="text-[10px] md:text-xs font-bold text-accent tracking-widest uppercase mb-1 md:mb-2">{material.category}</span>
        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-3 leading-tight">{material.title}</h3>
        <p className="text-xs md:text-sm text-secondary line-clamp-2 mb-2 md:mb-3 hidden md:-webkit-box text-center">{material.description}</p>
        
        <div className="w-full flex justify-center mb-1">
          <span className={`text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 rounded-full text-center leading-tight ${isWholesale ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
            {isWholesale ? 'Wholesale Pricing Available' : 'Retail Pricing Applied'}
          </span>
        </div>
        
        <div className="mt-auto pt-2 md:pt-4 flex flex-wrap justify-center gap-1 md:gap-2">
          {material.types.slice(0, 3).map((type, idx) => (
            <span key={idx} className="text-[9px] md:text-xs glass bg-gray-100/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-gray-700">
              {type}
            </span>
          ))}
          {material.types.length > 3 && (
            <span className="text-[9px] md:text-xs glass bg-gray-100/50 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-gray-700">
              +{material.types.length - 3}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MaterialCard;
