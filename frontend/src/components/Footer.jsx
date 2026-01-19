import React from 'react';
import { Crown, MessageCircle, Instagram } from 'lucide-react';
import { footerData, contactData } from '../data/mock';

// Discord Icon Component
const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, link: contactData.whatsapp.link, label: 'WhatsApp' },
    { icon: Instagram, link: contactData.instagram, label: 'Instagram' },
    { icon: DiscordIcon, link: contactData.discord, label: 'Discord' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Pixel Terrain Top */}
      <div 
        className="absolute -top-8 left-0 right-0 h-8"
        style={{
          background: 'linear-gradient(to bottom, transparent, #47B44A 50%, #2d7a2e 100%)',
          clipPath: 'polygon(0 100%, 5% 60%, 10% 80%, 15% 50%, 20% 70%, 25% 40%, 30% 60%, 35% 30%, 40% 50%, 45% 40%, 50% 60%, 55% 30%, 60% 50%, 65% 40%, 70% 70%, 75% 50%, 80% 60%, 85% 40%, 90% 70%, 95% 50%, 100% 80%, 100% 100%, 0 100%)'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 py-12 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={scrollToTop}
          >
            <div className="relative">
              <Crown className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span 
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                KING<span className="text-yellow-400">BLOX</span>
              </span>
              <span className="text-xs text-gray-500">{footerData.tagline}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.open(social.link, '_blank')}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            {footerData.copyright}
          </p>
          <p className="text-gray-600 text-xs">
            Topup Robux Termurah & Tercepat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
