import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Features.module.css';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuresList = [
    {
      title: "Prime Central Location",
      desc: "Shankarsheth Road, minutes from Swargate and MG Road.",
      icon: "📍"
    },
    {
      title: "Fully Furnished",
      desc: "185 workstations, all furniture as-is where-is. Move in immediately.",
      icon: "🏢"
    },
    {
      title: "100% Power Backup",
      desc: "Full DG backup ensures uninterrupted operations.",
      icon: "⚡"
    },
    {
      title: "Metro Proximity",
      desc: "Just 1 km from the nearest metro station.",
      icon: "🚇"
    },
    {
      title: "Modern Infrastructure",
      desc: "Server room, training room, dedicated electrical room.",
      icon: "🖥️"
    },
    {
      title: "Flexible Leasing",
      desc: "60-month tenure with 36-month lock-in and 5% annual escalation.",
      icon: "📄"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why Cybernex</h2>
          <div className={styles.divider}></div>
        </div>

        <motion.div 
          className={styles.grid}
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuresList.map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
