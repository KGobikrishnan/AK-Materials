import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Ramco", logo: "https://play-lh.googleusercontent.com/WZY5PTyXBoie5oEY9Z8efHEacJ01s32_WVMt29SBXFvlZPV1QRvcu_ZtiRcS-Z17whE" },
    { name: "Dalmia", logo: "https://companieslogo.com/img/orig/DALBHARAT.NS-2168c100.png?t=1720244491" },
    { name: "UltraTech", logo: "https://i.pinimg.com/736x/98/4d/60/984d60630186e440e9c01655c3e50f1b.jpg" }
  ];

  return (
    <section className="py-20 border-t border-gray-200/50 relative overflow-hidden bg-white/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-secondary font-semibold text-sm uppercase tracking-widest mb-12">Trusted by Leading Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
          {partners.map((partner, idx) => (
            <div key={idx} className="w-32 md:w-48 group">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
