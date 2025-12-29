import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/AnimatedShape.css';

function AnimatedShape({ type = 'circle', delay = 0, size = 100, style = {} }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.15,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  const getShapeClass = () => {
    switch (type) {
      case 'circle':
        return 'shape-circle';
      case 'square':
        return 'shape-square';
      case 'triangle':
        return 'shape-triangle';
      default:
        return 'shape-circle';
    }
  };

  const triangleStyle = type === 'triangle' 
    ? {
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid var(--blue-400)`,
        background: 'none',
        ...style
      }
    : { width: size, height: size, ...style };

  return (
    <motion.div
      className={`animated-shape ${getShapeClass()}`}
      style={triangleStyle}
      variants={shapeVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    />
  );
}

export default AnimatedShape;

