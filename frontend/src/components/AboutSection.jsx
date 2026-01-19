import React from 'react';
import { Crown, CheckCircle, Sparkles } from 'lucide-react';
import { aboutData } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400 font-medium">About Us</span>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-black mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              <span className="text-white">Selamat Datang di </span>
              <span className="text-yellow-400">KINGBLOX</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {aboutData.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-red-900/30 to-black rounded-3xl p-8 border border-red-500/20">
              {/* Decorative Crown */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <Crown className="w-16 h-16 text-yellow-400" />
                  <div className="absolute inset-0 bg-yellow-400/30 blur-xl" />
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center pt-8">
                <h3 
                  className="text-4xl font-black text-white mb-2"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  KING<span className="text-yellow-400">BLOX</span>
                </h3>
                <p className="text-red-400 font-bold mb-6">Topup Robux Termurah & Tercepat</p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                    <p className="text-2xl font-black text-green-500">Murah</p>
                    <p className="text-gray-500 text-sm">Harga Bersaing</p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                    <p className="text-2xl font-black text-yellow-400">Cepat</p>
                    <p className="text-gray-500 text-sm">Proses Kilat</p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                    <p className="text-2xl font-black text-red-500">Aman</p>
                    <p className="text-gray-500 text-sm">100% Trusted</p>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-white/5">
                    <p className="text-2xl font-black text-white">24/7</p>
                    <p className="text-gray-500 text-sm">Selalu Buka</p>
                  </div>
                </div>
              </div>

              {/* Pixel decoration */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-4 rounded-b-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, #47B44A, #2d7a2e)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
