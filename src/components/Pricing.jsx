import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic Static Website",
      description: "Perfect for small businesses getting started online",
      price: "₹2,999",
      originalPrice: "₹5,000",
      popular: false,
      features: [
        "Up to 5 Pages Website",
        "WhatsApp Chat Integration", 
        "Free Hosting Space for 1 Year",
        "Free SSL Certificate",
        "Mobile Friendly (Responsive)",
        "Image Slider on Home Page",
        "1 Inquiry Form/Contact Form",
        "Google Address Map Integration",
        "Free Business Webmail Email ID",
        "Social Media Link Integration",
        "Call Button Integration",
        "Next Year ₹2000 Hosting Renewal"
      ]
    },
    {
      name: "Business Dynamic Website",
      description: "Most popular choice for growing businesses",
      price: "₹4,999",
      originalPrice: "₹10,000",
      popular: true,
      features: [
        "Up to 15 Pages Website",
        "Free Business Webmail Email ID",
        "Search Engine Friendly URLs",
        "WhatsApp Chat Integration",
        "Free Hosting Space for 1 Year",
        "Free SSL Certificate",
        "Mobile Friendly (Responsive)",
        "Image Slider on Home Page",
        "1 Inquiry Form/Contact Form",
        "FTP Panel",
        "Google Address Map Integration",
        "Social Media Link Integration",
        "Call Button Integration",
        "Next Year ₹2000 Hosting Renewal"
      ]
    },
    {
      name: "Advanced Dynamic Website",
      description: "Complete solution for established businesses",
      price: "₹9,999",
      originalPrice: "₹20,000",
      popular: false,
      features: [
        "Unlimited Dynamic Pages Website",
        "Advanced and Secure Admin Panel",
        "Admin in CodeIgniter Framework",
        "WhatsApp Chat Integration",
        "User Friendly Admin - Easy content updates",
        "Product/Service/Gallery/Blog Modules",
        "Razorpay Payment Gateway Integration",
        "Free SSL Certificate",
        "Google robots.txt Sitemap Creation",
        "Search Engine Friendly URLs",
        "Free Hosting Space for 1 Year",
        "Mobile Friendly (Responsive)",
        "Image Slider on Home Page",
        "Google Address Map Integration",
        "Free Business Webmail Email ID",
        "Social Media Link Integration",
        "Call Button Integration",
        "Next Year ₹2000 Hosting Renewal"
      ]
    },
    {
      name: "Shopping Website",
      description: "Complete e-commerce solution for online stores",
      price: "₹11,999",
      originalPrice: "₹24,000",
      popular: false,
      features: [
        "Dynamic Products & Categories",
        "Payment Gateway Integration",
        "COD Payment Option",
        "Product Reviews & Ratings",
        "Wishlist & Product Compare",
        "Coupon & Reward Points",
        "Quick View & Cart",
        "Customer Account & Order History",
        "Multi-Currency Support",
        "Order Management & Shipping",
        "Sales Reports & Analytics",
        "Search Engine Friendly URLs",
        "Dynamic Pages (About, Policy, etc.)",
        "Admin Access for Easy Management",
        "WhatsApp Chat Integration",
        "Mobile Friendly (Responsive)",
        "Social Media Integration",
        "Premium Theme",
        "5 Sample Products Upload",
        "Note: Hosting and Domain Not Included"
      ]
    }
  ];

  const additionalServices = [
    { name: "Google Ads Campaign Setup", price: "₹2,999", originalPrice: "₹5,000", note: "1 Campaign + 1 Month Support" },
    { name: "Facebook Campaign Setup", price: "₹2,999", originalPrice: "₹5,000", note: "1 Campaign + 1 Month Support" },
    { name: "YouTube Campaign Setup", price: "₹2,999", originalPrice: "₹5,000", note: "1 Campaign + 1 Month Support" },
    { name: "SEO Services", price: "₹6,000 per month", originalPrice: "", note: "(10 Keywords)" },
    { name: "Web Hosting", price: "₹2,000 per year", originalPrice: "", note: "(Unlimited Space + SSL)" },
    { name: "Website AMC", price: "₹5,000 per month", originalPrice: "", note: "" }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, affordable pricing with no hidden costs. Choose the perfect plan for your business needs.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'bg-gradient-primary border-primary shadow-glow' 
                  : 'bg-card/50 border-border/50 hover:bg-card/80'
              } transition-all duration-300 hover:shadow-card hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-xl ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </CardTitle>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className={`text-lg line-through ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    One-time payment
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                      <span className={`text-xs ${plan.popular ? 'text-white/90' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-gradient-primary hover:shadow-glow'
                  } transition-all duration-300`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Additional Services</h3>
          <p className="text-center text-muted-foreground mb-8">
            Boost your online presence with our marketing and maintenance services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg line-through text-muted-foreground">
                        {service.originalPrice}
                      </span>
                    )}
                  </div>
                  {service.note && (
                    <p className="text-sm text-muted-foreground mb-4">{service.note}</p>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={scrollToContact}
                    className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-secondary border-border/50 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-muted-foreground mb-6">
                We also offer custom portal websites (₹50,000 - ₹3,00,000) and mobile app development (₹30,000 - ₹3,00,000). 
                Let's discuss your specific requirements.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Speak to Our Experts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;