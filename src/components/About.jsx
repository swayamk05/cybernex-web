import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';
import buildingImg from '../asset/building.png';

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
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.imageBlock}>
            <div className={styles.imageInner}>
              <img src={buildingImg} alt="Corporate Office" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
