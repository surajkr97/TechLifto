import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ 
  icon: Icon, 
  className = "", 
  size = 24, 
  color = "currentColor",
  animation = "bounce",
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const animations = {
    bounce: {
      initial: { scale: 1, rotate: 0 },
      animate: { 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        transition: { 
          duration: 0.6,
          delay,
          repeat: Infinity,
          repeatDelay: 3
        }
      },
      hover: {
        scale: 1.3,
        rotate: 15,
        transition: { duration: 0.3 }
      }
    },
    float: {
      initial: { y: 0, rotate: 0 },
      animate: {
        y: [-5, 5, -5],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 3,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      hover: {
        y: -10,
        scale: 1.2,
        transition: { duration: 0.3 }
      }
    },
    pulse: {
      initial: { scale: 1, opacity: 1 },
      animate: {
        scale: [1, 1.1, 1],
        opacity: [1, 0.7, 1],
        transition: {
          duration: 2,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      hover: {
        scale: 1.3,
        opacity: 1,
        transition: { duration: 0.3 }
      }
    },
    rotate: {
      initial: { rotate: 0 },
      animate: {
        rotate: 360,
        transition: {
          duration: 4,
          delay,
          repeat: Infinity,
          ease: "linear"
        }
      },
      hover: {
        rotate: 720,
        scale: 1.2,
        transition: { duration: 0.5 }
      }
    },
    glow: {
      initial: { scale: 1 },
      animate: {
        scale: [1, 1.05, 1],
        filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
        transition: {
          duration: 2.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      hover: {
        scale: 1.25,
        filter: "brightness(1.5) drop-shadow(0 0 20px currentColor)",
        transition: { duration: 0.3 }
      }
    }
  };

  const currentAnimation = animations[animation] || animations.bounce;

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={currentAnimation.initial}
      animate={currentAnimation.animate}
      whileHover={currentAnimation.hover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color }}
    >
      <Icon size={size} className="drop-shadow-lg" />
    </motion.div>
  );
};

export default AnimatedIcon;