import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './CommercialTerms.module.css';

const CommercialTerms = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className={styles.section}>
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.cardHeader}>
            <h2 className={styles.title}>Commercial Terms</h2>
            <div className={styles.accentLine}></div>
          </div>
          
          <div className={styles.contentGrid}>
            <div className={styles.leftCol}>
              <ul className={styles.termsList}>
                <li>
                  <span className={styles.label}>Build up Area</span>
                  <span className={styles.value}>50000 Sq Ft</span>
                </li>
                <li>
                  <span className={styles.label}>Security Deposit</span>
                  <span className={styles.value}>6 months' rent</span>
                </li>
                <li>
                  <span className={styles.label}>Tenure</span>
                  <span className={styles.value}>60 months</span>
                </li>
                <li>
                  <span className={styles.label}>Minimum Lock-In</span>
                  <span className={styles.value}>36 months</span>
                </li>
                <li>
                  <span className={styles.label}>Annual Escalation</span>
                  <span className={styles.value}>5% per annum</span>
                </li>
                <li>
                  <span className={styles.label}>DG Backup</span>
                  <span className={styles.value}>100%</span>
                </li>
                <li>
                  <span className={styles.label}>Parking (Included)</span>
                  <span className={styles.value}>four-wheelers + two-wheelers</span>
                </li>
                <li>
                  <span className={styles.label}>Additional Parking</span>
                  <span className={styles.value}>₹750/mo (2W), ₹1,500/mo (4W)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className={styles.cardFooter}>
            <a href="https://wa.me/919527320624" target="_blank" rel="noopener noreferrer" className={styles.enquireBtn}>Request a Callback</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialTerms;
