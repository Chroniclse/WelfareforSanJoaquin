import { useEffect, useRef } from 'react';
import '../styles/AnimatedPattern.css';

function AnimatedPattern() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated pattern elements
    const createPattern = () => {
      const pattern = document.createElement('div');
      pattern.className = 'pattern-container';
      
      // Create multiple pattern elements (dots)
      for (let i = 0; i < 25; i++) {
        const dot = document.createElement('div');
        dot.className = 'pattern-dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDelay = `${Math.random() * 4}s`;
        dot.style.animationDuration = `${3 + Math.random() * 2}s`;
        pattern.appendChild(dot);
      }

      // Create connecting lines with varying lengths
      for (let i = 0; i < 20; i++) {
        const line = document.createElement('div');
        line.className = 'pattern-line';
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${30 + Math.random() * 40}px`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.animationDuration = `${6 + Math.random() * 4}s`;
        pattern.appendChild(line);
      }

      // Create floating particles
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'pattern-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particle.style.animationDuration = `${4 + Math.random() * 3}s`;
        pattern.appendChild(particle);
      }

      container.appendChild(pattern);
    };

    createPattern();

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="animated-pattern"></div>;
}

export default AnimatedPattern;

