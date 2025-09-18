import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ExternalLink, Code, Users, Clock, Headphones, Smartphone, MessageCircle, Search } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Local Restaurant Website",
      category: "Restaurant",
      description: "Complete restaurant website with online menu, WhatsApp ordering, and location mapping.",
      features: ["Online Menu", "WhatsApp Orders", "Location Map", "Mobile Responsive"],
      technologies: ["React", "WhatsApp API", "Google Maps"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Medical Clinic Portal",
      category: "Healthcare",
      description: "Professional medical clinic website with appointment booking and doctor profiles.",
      features: ["Appointment Booking", "Doctor Profiles", "Contact Forms", "Service Pages"],
      technologies: ["Appointment System", "Contact Forms", "SEO Optimized"],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Tuition Center Website",
      category: "Education",
      description: "Educational platform for tuition center with course listings and teacher profiles.",
      features: ["Course Listings", "Teacher Profiles", "Admission Forms", "Gallery"],
      technologies: ["Course Management", "Form Integration", "Photo Gallery"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Local Shop E-commerce",
      category: "E-commerce",
      description: "Complete e-commerce solution for local shop with product catalog and payment gateway.",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
      technologies: ["E-commerce", "Payment Integration", "Inventory Management"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Freelancer Portfolio",
      category: "Portfolio",
      description: "Modern portfolio website for freelancer with project showcase and client testimonials.",
      features: ["Project Showcase", "Client Testimonials", "Contact Forms", "Blog"],
      technologies: ["Portfolio Design", "Blog System", "Contact Integration"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "Service Provider Website",
      category: "Services",
      description: "Professional service provider website with booking system and customer reviews.",
      features: ["Service Listings", "Booking System", "Customer Reviews", "WhatsApp Chat"],
      technologies: ["Booking System", "Review Management", "WhatsApp Integration"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const stats = [
    { icon: <Code className="w-8 h-8 text-primary" />, value: "50+", label: "Websites Built" },
    { icon: <Users className="w-8 h-8 text-primary" />, value: "100%", label: "Client Satisfaction" },
    { icon: <Clock className="w-8 h-8 text-primary" />, value: "5-7", label: "Days Delivery" },
    { icon: <Headphones className="w-8 h-8 text-primary" />, value: "24/7", label: "Support Available" }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped local businesses establish their online presence with professional, mobile-friendly websites.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group overflow-hidden"
            >
              <div className="aspect-video bg-gradient-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Makes Our Websites Special */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">What Makes Our Websites Special?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-secondary border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Mobile-First Design</h4>
                <p className="text-muted-foreground text-sm">
                  All our websites are designed to look perfect on mobile devices, ensuring your customers can access your business from anywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">WhatsApp Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Direct WhatsApp chat buttons make it easy for customers to contact you instantly, increasing engagement and conversions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">SEO Optimized</h4>
                <p className="text-muted-foreground text-sm">
                  Built with search engine optimization in mind, helping your business get found by customers searching online.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary border-border/50 shadow-card text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  Get your professional website up and running in just 5-7 days with our streamlined development process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Your Website?</h3>
              <p className="text-white/90 mb-6">
                Join the growing number of local businesses that have taken their business online with TechLifto. 
                Let's build something amazing together!
              </p>
              <Button 
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Your Project Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;