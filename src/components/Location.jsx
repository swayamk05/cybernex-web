import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Location.module.css';

const Location = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const distances = [
    { label: 'Metro Station', type: 'metro', dist: '1 km' },
    { label: 'MG Road', type: 'landmark', dist: '2 km' },
    { label: 'Railway Station', type: 'railway', dist: '4 km' },
    { label: 'Deccan', type: 'landmark', dist: '4 km' },
    { label: 'Kondhwa', type: 'landmark', dist: '6 km' },
    { label: 'Pune Airport', type: 'airport', dist: '10 km' },
  ];

  return (
    <section className={styles.section} id="location">
      <div className={`container ${styles.grid}`} ref={ref}>
        <motion.div 
          className={styles.mapContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=399+Shankarsheth+Road+Swargate+Pune&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Cybernex Location"
            className={styles.map}
          ></iframe>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Strategic Location</h2>
            <div className={styles.divider}></div>
            <p className={styles.desc}>Situated on Shankarsheth Road, placing you in the heart of Pune's commercial hub.</p>
          </div>

          <div className={styles.timeline}>
            {distances.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className={styles.timelineNode}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.itemDist}>{item.dist}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.footerNote}>
            <p>"Boosting productivity every day by reducing commute times."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
