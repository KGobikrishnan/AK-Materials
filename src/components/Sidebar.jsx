import React from 'react';
import { Layers, Home, Phone, Package, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const links = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Materials", icon: <Layers size={20} /> },
    { name: "Bulk/Retail", icon: <Package size={20} /> },
    { name: "About", icon: <Info size={20} /> },
    { name: "Contact", icon: <Phone size={20} /> }
  ];

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed bottom-4 left-4 right-4 md:bottom-auto md:left-4 md:right-auto md:top-1/2 md:-translate-y-1/2 z-[100] rounded-2xl glass p-3 flex flex-row md:flex-col justify-around md:justify-center gap-2 md:gap-6 items-center shadow-2xl border border-white/20"
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center md:mb-4 shrink-0">
        <img src="/images/logo.png" alt="AK Logo" className="w-8 h-8 object-contain" />
      </div>
      
      {links.map((link, idx) => {
        const isBulkRetail = link.name === "Bulk/Retail";
        return (
          <a 
            key={idx} 
            href={`#${link.name.toLowerCase().replace('/', '-')}`}
            className={`text-secondary hover:text-accent transition-colors duration-300 relative group p-2 md:p-3 flex flex-col items-center gap-1 ${isBulkRetail ? 'hidden md:flex' : 'flex'}`}
          >
            {link.icon}
            <span className="text-[10px] md:hidden font-medium">{link.name}</span>
            <span className="hidden md:block absolute left-full ml-4 bg-white text-secondary px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-gray-100 pointer-events-none">
              {link.name}
            </span>
          </a>
        );
      })}
    </motion.nav>
  );
};

export default Sidebar;
