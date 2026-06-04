import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Features.module.css';

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuresList = [
    {
      title: "Prime Central Location",
      desc: "Situated on Shankarsheth Road, just minutes from Swargate and MG Road, ensuring excellent connectivity."
    },
    {
      title: "Fully Furnished",
      desc: "Ready to move in with 185 workstations and premium furniture provided on an as-is where-is basis."
    },
    {
      title: "100% Power Backup",
      desc: "Equipped with full DG backup to guarantee uninterrupted business operations and productivity."
    },
    {
      title: "Metro Proximity",
      desc: "Strategically located just 1 km from the nearest metro station for effortless employee commutes."
    },
    {
      title: "Modern Infrastructure",
      desc: "Includes dedicated spaces like a server room, training room, and an exclusive electrical room."
    },
    {
      title: "Flexible Leasing",
      desc: "Offering a 60-month tenure with a 36-month lock-in period and a standard 5% annual escalation."
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <h4 className={styles.subtitle}>THE CYBERNEX ADVANTAGE</h4>
          <h2 className={styles.title}>Why Choose Us</h2>
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
              <div className={styles.cardNumber}>0{idx + 1}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
