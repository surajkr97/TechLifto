import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Zap, Clock, DollarSign, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Professional Design",
      description: "Custom websites that look professional and represent your brand perfectly."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "Get your website up and running in just 5-7 days with our streamlined process."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Affordable Pricing",
      description: "Quality websites starting from just ₹2,999. No hidden costs, transparent pricing."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Local Focus",
      description: "Specialized in helping local businesses, shops, and service providers go online."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About TechLifto</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a website development business that builds simple, affordable, and professional websites for local businesses, shops, service providers, startups, and individuals.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center mb-16">
          <div className="bg-gradient-primary p-8 rounded-2xl max-w-2xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/90 text-lg">
              "To lift local businesses into the digital world — one website at a time."
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founder's Message */}
        <Card className="bg-gradient-secondary border-border/50 shadow-card">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Founder's Message</h3>
              <p className="text-muted-foreground">Dear Visitors,</p>
            </div>
            <div className="prose prose-invert max-w-4xl mx-auto text-center">
              <p className="text-foreground/90 leading-relaxed mb-6">
                We are <strong className="text-primary">Saharsh & Ehtesham</strong>, the founders of TechLifto — a company born out of a simple idea: 
                <em className="text-primary"> "Every business, no matter how small, deserves a great online presence."</em>
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                In today's digital age, many local businesses are still missing out on the opportunities the internet provides. 
                That's where TechLifto comes in. We help shop owners, tutors, freelancers, and service providers launch their 
                very own websites — fast, professionally, and affordably.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Whether you need a simple site to showcase your work or a complete business website with WhatsApp, Google Maps, 
                and more — we're here to help you go online with confidence.
              </p>
              <p className="text-primary font-semibold">
                Thank you for trusting TechLifto. Let's lift your business to new heights 🚀
              </p>
              <div className="mt-4 text-muted-foreground">
                — <strong>Ehtesham & Saharsh</strong><br />
                Founders, TechLifto
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;