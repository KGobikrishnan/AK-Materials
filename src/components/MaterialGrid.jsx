import React from 'react';
import MaterialCard from './MaterialCard';

const MaterialGrid = ({ materials, setSelectedMaterial, isWholesale }) => {
  return (
    <div id="materials" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8" style={{ perspective: "1000px" }}>
        {materials.map((material) => (
          <MaterialCard 
            key={material.id} 
            material={material} 
            setSelectedMaterial={setSelectedMaterial} 
            isWholesale={isWholesale}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterialGrid;
