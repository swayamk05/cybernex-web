import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Amenities.module.css';

const Amenities = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const amenities = [
    { name: "Workstations", count: "185" },
    { name: "Team Leader Desks", count: "8" },
    { name: "Working Cubicles", count: "2" },
    { name: "Manager Cabin", count: "1" },
    { name: "Meeting Rooms", count: "3" },
    { name: "Training Room", count: "1" },
    { name: "Server Room", count: "1" },
    { name: "Electrical Room", count: "1" },
    { name: "Pantry", count: "1" },
    { name: "Ladies Washroom", count: "1" },
    { name: "Gents Washroom", count: "1" },
    { name: "Utility Room", count: "1" },
    { name: "Full-Height Storage", count: "6" },
    { name: "Low-Height Storage", count: "6" },
    { name: "Lift Lobby", count: "Premium" },
    { name: "Parking", count: "2 Cars + 20 Bikes" },
  ];

  return (
    <section className={styles.section} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Features & Amenities</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid} ref={ref}>
          {amenities.map((item, idx) => (
            <motion.div 
              key={idx} 
              className={styles.item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className={styles.itemInner}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.count}>{item.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
