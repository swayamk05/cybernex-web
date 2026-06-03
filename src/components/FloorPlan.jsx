import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './FloorPlan.module.css';

const FloorPlan = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const planImages = [
    {
      id: 1,
      title: '3D Proposed Layout',
      src: 'src/asset/proposed-plan-1.png',
      alt: '3D office layout for the proposed plan section',
    },
    {
      id: 2,
      title: 'Typical Floor Plan',
      src: 'src/asset/image.png',
      alt: 'Typical office floor plan drawing for the proposed plan section',
    },
  ];

  const legendData = [
    { id: 1, name: "Agents Desk", qty: 7 },
    { id: 2, name: "Workstation", qty: 185 },
    { id: 3, name: "Working Cubicles", qty: 2 },
    { id: 4, name: "Meeting Room", qty: 3 },
    { id: 5, name: "Training Room", qty: 1 },
    { id: 6, name: "Low-Height Storage", qty: 6 },
    { id: 7, name: "Full-Height Storage", qty: 6 },
    { id: 8, name: "Team Leaders Desk", qty: 8 },
    { id: 9, name: "Centre Manager's Cabin", qty: 1 },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveSlide((current) => (current + 1) % planImages.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [planImages.length]);

  const goToSlide = (nextIndex) => {
    if (nextIndex === activeSlide) {
      return;
    }

    setDirection(nextIndex > activeSlide ? 1 : -1);
    setActiveSlide(nextIndex);
  };

  const showPrevious = () => {
    setDirection(-1);
    setActiveSlide((current) => (current - 1 + planImages.length) % planImages.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveSlide((current) => (current + 1) % planImages.length);
  };

  const slideVariants = {
    enter: (currentDirection) => ({
      x: currentDirection > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (currentDirection) => ({
      x: currentDirection > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section className={styles.section} id="floorplan">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Proposed Floor Layout</h2>
          <p className={styles.subtitle}><em>7,320 sq ft of optimized workspace</em></p>
          <div className={styles.divider}></div>
        </div>

        <motion.div 
          className={styles.content}
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={planImages[activeSlide].id}
                  className={styles.slide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={planImages[activeSlide].src}
                    alt={planImages[activeSlide].alt}
                    className={styles.planImage}
                    loading="lazy"
                  />
                  <div className={styles.slideOverlay}>
                    <span className={styles.slideTitle}>{planImages[activeSlide].title}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={showPrevious}
                aria-label="Show previous proposed plan image"
              >
                &#8249;
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={showNext}
                aria-label="Show next proposed plan image"
              >
                &#8250;
              </button>

              <div className={styles.pagination}>
                {planImages.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    className={`${styles.paginationDot} ${index === activeSlide ? styles.paginationDotActive : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${image.title}`}
                    aria-pressed={index === activeSlide}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.legendContainer}>
            <h3 className={styles.legendTitle}>Furniture Legend</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.legendTable}>
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Description</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {legendData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FloorPlan;
