import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { 
  Code, 
  MessageCircle, 
  MapPin, 
  Smartphone, 
  Search, 
  Mail, 
  Palette, 
  Server 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Website Design & Development",
      description: "Custom websites for clinics, shops, tuition centers, freelancers, and more.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Custom Domain"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "WhatsApp Integration",
      description: "Direct WhatsApp chat button for instant customer communication.",
      features: ["Click to Chat", "Business WhatsApp", "Auto Messages", "Chat Widget"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Google Maps & Location",
      description: "Integrated Google Maps to help customers find your business easily.",
      features: ["Interactive Maps", "Directions", "Business Hours", "Contact Info"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile-Friendly Design",
      description: "Websites that look perfect on all devices - mobile, tablet, and desktop.",
      features: ["Responsive Layout", "Touch Friendly", "Fast Mobile Loading", "App-like Feel"]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO & Digital Marketing",
      description: "Help customers find your business online with search engine optimization.",
      features: ["Google Ranking", "Local SEO", "Meta Tags", "Site Speed"]
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Business Email Setup",
      description: "Professional email addresses with your domain name.",
      features: ["Custom Email", "Email Hosting", "Spam Protection", "Mobile Access"]
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Logo & Branding",
      description: "Professional logo design and brand identity for your business.",
      features: ["Logo Design", "Brand Colors", "Business Cards", "Social Media Kit"]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Hosting & Maintenance",
      description: "Reliable hosting with SSL certificate and regular maintenance.",
      features: ["SSL Certificate", "99.9% Uptime", "Daily Backups", "Security Updates"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to establish a strong online presence for your business. 
            From design to deployment, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Packages Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Service Packages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="bg-gradient-secondary border-border/50 shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Website</CardTitle>
                <p className="text-muted-foreground">Perfect for small businesses getting started online</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    1-5 pages (Home, About, Contact, Gallery, Services)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mobile responsive design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Contact form
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Basic SEO setup
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Package */}
            <Card className="bg-gradient-primary border-border/50 shadow-glow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">Business Website + WhatsApp</CardTitle>
                <p className="text-white/80">Complete business solution with customer engagement</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Everything in Basic
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    WhatsApp chat integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Google Maps integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Contact forms
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Social media links
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Startup Package */}
            <Card className="bg-gradient-secondary border-border/50 shadow-card">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Startup Package</CardTitle>
                <p className="text-muted-foreground">Everything you need to launch your business online</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Everything in Business
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Custom domain name
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Business email ID
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    1 month support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Logo design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;