import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      e.target.reset();
    }, 1500);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.grid}`} ref={ref}>
        <motion.div 
          className={styles.infoCol}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Enquire Now</h2>
          <div className={styles.divider}></div>
          <p className={styles.desc}>Let's discuss how Cybernex can be the perfect fit for your growing business.</p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <h4 className={styles.detailTitle}>Corporate Office</h4>
              <p className={styles.detailText}>
                The Mudhol Land Holdings Company Pvt. Ltd.<br/>
                #506 City Point, 17 Boat Club Road,<br/>
                Pune 411 001
              </p>
            </div>
            
            <div className={styles.detailItem}>
              <h4 className={styles.detailTitle}>Site Address</h4>
              <p className={styles.detailText}>
                CYBERNEX<br/>
                399, Shankarsheth Road, Swargate<br/>
                Pune 411 037
              </p>
            </div>
            
            <div className={styles.detailGroup}>
              <div className={styles.detailItem}>
                <h4 className={styles.detailTitle}>Phone</h4>
                <p className={styles.detailText}>+91 95273 20624</p>
              </div>
              
              <div className={styles.detailItem}>
                <h4 className={styles.detailTitle}>Email & Web</h4>
                <p className={styles.detailText}>admin@rmhrc.com<br/>www.cybernex.in</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formCol}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
         
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
