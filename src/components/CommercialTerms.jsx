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
                  <span className={styles.label}>Rate</span>
                  <span className={styles.value}>₹100/- per sq ft/month + taxes</span>
                </li>
                <li>
                  <span className={styles.label}>Maintenance</span>
                  <span className={styles.value}>₹10/- per sq ft/month + taxes</span>
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
            
            <div className={styles.rightCol}>
              <div className={styles.highlightBox}>
                <span className={styles.highlightLabel}>Base Rent</span>
                <span className={styles.highlightValue}>₹7,32,000<span className={styles.perMonth}>/month</span></span>
                <span className={styles.highlightDisclaimer}>*Excluding taxes & maintenance</span>
                <a href="#contact" className={styles.enquireBtn}>Request a Callback</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialTerms;
