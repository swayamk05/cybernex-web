import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './PropertySnapshot.module.css';

// Counter component for animation
const Counter = ({ from = 0, to, duration = 2, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime;
    let animationFrame;
    
    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentVal = Math.floor(easeOutExpo(progress) * (to - from) + from);
      
      setCount(currentVal);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCounter);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count.toLocaleString()}</span>;
};

const PropertySnapshot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
  { num: 50000, label: 'Sq Ft', desc: 'Premium Workspace' },
  { num: 7, label: 'Office Floors', desc: 'Scalable Occupancy' },
  { num: 2, label: 'Parking Floors', desc: 'Convenient Access' },
  { num: 100, suffix: '+', label: 'Seats Per Floor', desc: 'Flexible Layouts' },
  { num: 100, suffix: '%', label: 'Power Backup', desc: 'Zero Downtime' },
  { num: 1, suffix: ' KM', label: 'Metro Access', desc: 'Strategic Location' },
  { num: 24, suffix: '/7', label: 'Security', desc: 'Managed Premises' },
];

  return (
    <section className={styles.section} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.number}>
              <Counter to={stat.num} inView={isInView} />
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <h3 className={styles.label}>{stat.label}</h3>
            <p className={styles.desc}>{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PropertySnapshot;
