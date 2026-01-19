import React from 'react';
import { MessageCircle, Users, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { contactData } from '../data/mock';

// Discord Icon Component
const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const ContactSection = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Chat langsung untuk order cepat',
      value: contactData.whatsapp.number,
      link: contactData.whatsapp.link,
      icon: MessageCircle,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 'whatsapp-group',
      title: 'WhatsApp Group',
      description: 'Join komunitas KINGBLOX',
      value: 'Join Group',
      link: contactData.whatsappGroup,
      icon: Users,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Follow untuk update terbaru',
      value: '@kingbloxid',
      link: contactData.instagram,
      icon: Instagram,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      id: 'discord',
      title: 'Discord',
      description: 'Gabung server komunitas',
      value: 'Join Server',
      link: contactData.discord,
      icon: DiscordIcon,
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-green-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Contact Us</span>
          </div>

          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-white">Hubungi </span>
            <span className="text-yellow-400">KINGBLOX</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Siap melayani kamu 24 jam! Pilih platform favorit untuk menghubungi kami
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => window.open(method.link, '_blank')}
                className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 text-left"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  {method.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                  {method.value}
                </p>
              </button>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-red-900/30 via-yellow-900/30 to-green-900/30 rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Ready to Top Up?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Dapatkan Robux dengan harga termurah dan proses tercepat sekarang juga!
            </p>
            <Button
              onClick={() => window.open('https://wa.me/6281381562906', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Order Sekarang via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
