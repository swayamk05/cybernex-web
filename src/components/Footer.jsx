import React from 'react';
import styles from './Footer.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.footer} fade-up ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <h3 className={styles.brand}>CYBERNEX</h3>
            <p className={styles.address}>399 Shankarsheth Road, Pune</p>
          </div>
          
          <div className={styles.center}>
            <ul className={styles.links}>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#floorplan">Layout</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          
          <div className={styles.right}>
            <p>© 2026 The Mudhol Land Holdings Company Pvt. Ltd.</p>
            <button onClick={scrollToTop} className={styles.backToTop}>↑ Back to Top</button>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>admin@rmhrc.com · +91 95273 20624</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
