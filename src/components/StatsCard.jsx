import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/StatsCard.css';

function StatsCard({ label, value, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return; // Already animated, don't set up observer again

    const animateCount = () => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
          // Disconnect observer after first trigger to prevent replay
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, value]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <motion.div
      ref={cardRef}
      className="stats-card"
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="stats-card-content">
        <div className="stats-value">
          {prefix}
          {formatNumber(count)}
          {suffix}
        </div>
        <div className="stats-label">{label}</div>
      </div>
      <div className="stats-card-decoration"></div>
    </motion.div>
  );
}

export default StatsCard;

