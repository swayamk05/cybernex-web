import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Advantages', href: '#features' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Layout', href: '#floorplan' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>CYBERNEX</a>
        
        <nav className={styles.desktopNav}>
          <ul className={styles.navItems}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.enquireBtn}>Enquire Now</a>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileNavItems}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className={styles.mobileEnquireBtn} onClick={() => setMobileMenuOpen(false)}>Enquire Now</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
    </header>
  );
};

export default Navbar;
