import React from 'react';
import { Zap, Users, Clock, Shield } from 'lucide-react';
import { whyChooseUsData } from '../data/mock';

const iconMap = {
  zap: Zap,
  users: Users,
  clock: Clock,
  shield: Shield
};

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Why Choose Us</span>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-white">Kenapa </span>
            <span className="text-yellow-400">KINGBLOX</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alasan kenapa ribuan gamer Indonesia mempercayai KINGBLOX
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            const colors = [
              { border: 'border-yellow-500/30', bg: 'bg-yellow-500', glow: 'shadow-yellow-500/20' },
              { border: 'border-green-500/30', bg: 'bg-green-500', glow: 'shadow-green-500/20' },
              { border: 'border-red-500/30', bg: 'bg-red-500', glow: 'shadow-red-500/20' },
              { border: 'border-blue-500/30', bg: 'bg-blue-500', glow: 'shadow-blue-500/20' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={item.id}
                className={`group relative bg-white/5 rounded-2xl p-6 border ${color.border} hover:bg-white/10 transition-all duration-300 text-center hover:scale-105`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${color.bg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg ${color.glow} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
