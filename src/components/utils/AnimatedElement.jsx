// src/components/AnimatedElement.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  scaleInTop: {
    hidden: { scale: 0.8, opacity: 0, y: -50 },
    visible: { scale: 1, opacity: 1, y: 0 }
  },
  scaleInBottom: {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideInRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  slideInTop: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  slideInBottom: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  rotateIn: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1 }
  },
  rotateInLeft: {
    hidden: { rotate: -90, opacity: 0, x: -100 },
    visible: { rotate: 0, opacity: 1, x: 0 }
  },
  rotateInRight: {
    hidden: { rotate: 90, opacity: 0, x: 100 },
    visible: { rotate: 0, opacity: 1, x: 0 }
  },
  bounceIn: {
    hidden: { scale: 0.3, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }
  },
  flipInX: {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  },
  flipInY: {
    hidden: { rotateY: -90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  }
};
const AnimatedElement = ({ children, animationType, duration = 0.5, threshold = 0.1 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  if (!animations[animationType]) {
    console.error(`Animation type "${animationType}" is not defined`);
    return <div>{children}</div>; // Render children without animation if type is invalid
  }

  const animation = animations[animationType];

  const variants = {
    hidden: animation.hidden,
    visible: {
      ...animation.visible,
      transition: { duration: duration }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;