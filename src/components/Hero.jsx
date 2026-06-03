import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} id="home" ref={ref}>
      <motion.div 
        className={styles.heroBackground} 
        style={{ y: backgroundY }}
      />
      <div className={styles.overlay}></div>
      <motion.div 
        className={`container ${styles.heroContent}`}
        style={{ y: textY, opacity: textOpacity }}
      >
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.tagline}>Systems — Evolving Business</span>
          <h1 className={styles.headline}>CYBERNEX</h1>
          <p className={styles.subHeadline}>399, Shankarsheth Road, Swargate · Pune</p>
        </motion.div>

        <motion.div 
          className={styles.statPills}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.pill}>7,320 Sq Ft</div>
          <div className={styles.pillDivider}></div>
          <div className={styles.pill}>185 Workstations</div>
          <div className={styles.pillDivider}></div>
          <div className={styles.pill}>Heart of Pune</div>
        </motion.div>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#floorplan" className={styles.btnOutline}>View Floor Plan</a>
          <a href="#contact" className={styles.btnSolid}>Schedule a Visit</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
