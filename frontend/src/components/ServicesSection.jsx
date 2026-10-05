import React from 'react';
import { Coins, Package, Headphones, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/mock';

const iconMap = {
  coins: Coins,
  package: Package,
  headphones: Headphones
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Package className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">Our Services</span>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-white">Layanan </span>
            <span className="text-yellow-400">KINGBLOX</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Berbagai layanan Roblox terbaik dengan harga termurah dan pelayanan tercepat
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const colors = [
              { bg: 'from-red-500/20 to-red-900/20', icon: 'bg-red-500', text: 'text-red-400' },
              { bg: 'from-yellow-500/20 to-yellow-900/20', icon: 'bg-yellow-500', text: 'text-yellow-400' },
              { bg: 'from-green-500/20 to-green-900/20', icon: 'bg-green-500', text: 'text-green-400' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${color.icon} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a href="https://wa.me/6281381562906" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${color.text} font-medium group-hover:gap-3 transition-all`}>
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
