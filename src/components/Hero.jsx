import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import AnimatedIcon from '@/components/AnimatedIcon.jsx';
import AnimatedGlobe from '@/components/AnimatedGlobe.jsx';
import useScrollAnimation from '@/hooks/useScrollAnimation.jsx';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Globe2, 
  Zap, 
  Star,
  Sparkles,
  Rocket,
  Shield,
  TrendingUp
} from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1);

  const texts = [
    'Crafting Digital Experiences...',
    'Building Tomorrow\'s Websites...',
    'Elevating Business Presence...',
    'Creating Web Masterpieces...',
    'Your Vision = Our Innovation'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen pt-16 pb-8 mt-8 relative overflow-hidden flex items-center"
    >
      {/* Advanced Background System */}
      <div className="absolute inset-0 gradient-cosmic"></div>
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-accent rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-secondary rounded-full opacity-12 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Icons */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                scale: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            >
              {i % 4 === 0 && <Code2 size={20 + Math.random() * 15} />}
              {i % 4 === 1 && <Sparkles size={20 + Math.random() * 15} />}
              {i % 4 === 2 && <Rocket size={20 + Math.random() * 15} />}
              {i % 4 === 3 && <Shield size={20 + Math.random() * 15} />}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isHeroVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Animated Badge */}
              <motion.div 
                className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 mb-6"
                whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedIcon icon={Zap} size={18} className="text-primary mr-2" animation="glow" />
                <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
                  Elite Web Development Studio
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={itemVariants}
                className="font-black leading-[1.1] font-inter text-[clamp(2.75rem,5vw,4rem)]"
              >
                <motion.span 
                  className="bg-gradient-primary bg-clip-text text-transparent block"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Elevating Businesses
                </motion.span>
                <motion.span 
                  className="text-foreground block mt-2 relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Into Digital
                  <motion.span
                    className="absolute -right-4 -top-4"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-8 h-8 text-accent" />
                  </motion.span>
                </motion.span>
              </motion.h1>

              {/* Animated Typewriter */}
              <motion.div 
                variants={itemVariants}
                className="h-16 flex items-center"
              >
                <p className="text-xl md:text-2xl font-mono bg-gradient-accent bg-clip-text text-transparent">
                  {currentText}
                  <motion.span 
                    className="text-accent"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Crafting exceptional digital experiences for forward-thinking businesses. 
                We transform ideas into powerful, responsive websites that drive growth and engagement.
              </motion.p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-lg"
            >
              {[
                { icon: Smartphone, text: "Smart Integration" },
                { icon: Globe2, text: "Global Reach" },
                { icon: TrendingUp, text: "Growth Focused" },
                { icon: Shield, text: "Secure & Fast" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 glass rounded-xl border border-border/30"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "var(--shadow-accent)",
                    borderColor: "hsl(var(--primary))"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedIcon 
                    icon={item.icon} 
                    size={20} 
                    className="text-primary" 
                    animation="pulse"
                    delay={index * 0.2}
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="btn-cosmic px-8 py-6 text-lg font-semibold shadow-glow"
                >
                  Start Your Project
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('#portfolio')}
                  className="glass border-primary/30 hover:border-primary hover:shadow-accent px-8 py-6 text-lg font-semibold"
                >
                  Explore Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-start gap-8 pt-8"
            >
              {[
                { value: "100+", label: "Projects Delivered", icon: Star },
                { value: "48hrs", label: "Avg Response", icon: Zap },
                { value: "99.9%", label: "Client Satisfaction", icon: TrendingUp }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center justify-center mb-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <AnimatedIcon 
                      icon={stat.icon} 
                      size={20} 
                      className="ml-2 text-primary group-hover:text-accent" 
                      animation="bounce"
                      delay={index * 0.2}
                    />
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Globe */}
          <motion.div 
            className="relative h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={isHeroVisible ? { 
              opacity: 1, 
              scale: 1, 
              rotateY: 0 
            } : {}}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            <div className="relative w-full h-full">
              <AnimatedGlobe className="w-full h-full" />
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-accent rounded-full opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-25 blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0] 
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;