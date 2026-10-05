import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '../data/mock';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Red Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px]" />

      {/* Pixel Terrain Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-800 to-transparent opacity-50" />
      <div 
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: 'linear-gradient(to top, #47B44A 0%, #2d7a2e 50%, transparent 100%)',
          clipPath: 'polygon(0 60%, 5% 50%, 10% 60%, 15% 40%, 20% 55%, 25% 45%, 30% 60%, 35% 40%, 40% 55%, 45% 45%, 50% 60%, 55% 40%, 60% 55%, 65% 45%, 70% 60%, 75% 40%, 80% 55%, 85% 45%, 90% 60%, 95% 50%, 100% 60%, 100% 100%, 0 100%)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90 font-medium">Trusted Roblox Store</span>
          </div>

          {/* Crown Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-20 h-20 md:w-28 md:h-28 text-yellow-400 animate-bounce" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full" />
            </div>
          </div>

          {/* Main Title */}
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-white">KING</span>
            <span className="text-yellow-400">BLOX</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-red-500 font-bold mb-6 tracking-wide">
            {siteConfig.description}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Toko Roblox #1 di Indonesia dengan harga termurah dan pelayanan tercepat!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30 group">
              <a href="https://wa.me/6281381562906" target="_blank" rel="noopener noreferrer">
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105">
              <a href="https://discord.com/invite/kingblox" target="_blank" rel="noopener noreferrer">Join Community</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-yellow-400">24/7</p>
              <p className="text-gray-500 text-sm mt-1">Always Open</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-green-500">Fast</p>
              <p className="text-gray-500 text-sm mt-1">Response</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-red-500">100%</p>
              <p className="text-gray-500 text-sm mt-1">Trusted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
