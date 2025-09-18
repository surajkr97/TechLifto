import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import logo from '@/assets/techlifto-logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Website Development',
    'WhatsApp Integration',
    'SEO Optimization',
    'E-commerce Solutions',
    'Mobile App Development',
    'Digital Marketing',
    'Logo Design',
    'Web Hosting'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-hero border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="TechLifto" className="h-12 w-12" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TechLifto
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Lifting local businesses into the digital world with professional, affordable websites. 
              Your success is our mission.
            </p>
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                Trusted by 50+ local businesses across India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>+91 9153162465</div>
                  <div>+91 6207577121</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>tech4lifto@gmail.com</div>
                  <div>surajkumar06174@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>Serving Businesses Nationwide</div>
                  <div>India - 110001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© 2024 TechLifto. All rights reserved. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for local businesses.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;