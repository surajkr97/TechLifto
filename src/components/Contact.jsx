import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Phone, Mail, MessageSquare, Clock, Send } from "lucide-react";
import Globe from "./Globe.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    serviceRequired: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `New Contact Request from ${formData.fullName}`;
    const body = `
    Name: ${formData.fullName}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Business Name: ${formData.businessName}
    Service Required: ${formData.serviceRequired}
    Project Details: ${formData.projectDetails}
  `;

    // Open email client
    window.location.href = `mailto:tech4lifto@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      alert(
        "Your email draft is ready! Please send it to complete the request."
      );

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        businessName: "",
        serviceRequired: "",
        projectDetails: "",
      });

      setIsSubmitting(false);
    }, 500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: ["+91 9153162465", "+91 6207577121"],
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: ["tech4lifto@gmail.com", "surajkumar06174@gmail.com"],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      details: ["+91 9153162465"],
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "We discuss your needs and requirements",
    },
    {
      number: "2",
      title: "Design",
      description: "We create a custom design for your business",
    },
    {
      number: "3",
      title: "Development",
      description: "We build your website with all features",
    },
    {
      number: "4",
      title: "Launch",
      description: "We launch your website and provide support",
    },
  ];

  const requirements = [
    "Business name and logo (if available)",
    "About your company/services",
    "Photos (shop/products/services)",
    "Contact information",
    "Desired features and functionality",
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take your business online? Contact us today for a free
            consultation and let's discuss how we can help you grow your
            business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card/50 border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-primary" />
                <span>Send Us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Business Name
                    </label>
                    <Input
                      value={formData.businessName}
                      onChange={(e) =>
                        handleInputChange("businessName", e.target.value)
                      }
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Service Required *
                  </label>
                  <select
                    required
                    value={formData.serviceRequired}
                    onChange={(e) =>
                      handleInputChange("serviceRequired", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="basic">Basic Static Website</option>
                    <option value="business">Business Dynamic Website</option>
                    <option value="advanced">Advanced Dynamic Website</option>
                    <option value="ecommerce">Shopping Website</option>
                    <option value="custom">Custom Development</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Details
                  </label>
                  <Textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) =>
                      handleInputChange("projectDetails", e.target.value)
                    }
                    placeholder="Tell us about your project requirements, business goals, or any specific features you need..."
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                We'll get back to you within 24 hours. For urgent inquiries,
                call us directly or WhatsApp us.
              </p>

              <div className="mt-6 flex justify-center">
                <Globe />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-primary shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Let's Start Your Project
                </h3>
                <p className="text-white/90 mb-4">
                  We're here to help you every step of the way. From initial
                  consultation to website launch, our team is committed to
                  delivering exceptional results for your business.
                </p>
                <Button
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() =>
                    window.open("https://wa.me/+919153162465", "_blank")
                  }
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  What We Need From You:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">
            Our Simple Process
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            From consultation to launch in just 5-7 days
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-secondary border-border/50 shadow-card text-center relative"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
