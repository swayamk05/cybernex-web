import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={styles.aboutSection} id="about">
      <div className={`container ${styles.aboutGrid}`} ref={ref}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className={styles.subtitle}>WHO WE ARE</h4>
          <h2 className={styles.title}>The Mudhol Land Holdings<br/>Company Pvt. Ltd.</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>
            We are a land consolidation company implementing cost-effective methods in optimizing the intrinsic values of our holdings. Our infrastructure, experience in land management solutions and our emphasis on quality make us different.
          </p>
          <p className={styles.text}>
            At MLH, we focus on developing long-term partnerships with clients to enhance competitiveness. Our goal is to exceed all expectations by combining the performance of our consultants and infrastructure to deliver the right services for improved productivity and profitability for our clients.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className={styles.imageBlock}>
            <div className={styles.imageInner}>
              <img src="src/asset/building.png" alt="Corporate Office" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
