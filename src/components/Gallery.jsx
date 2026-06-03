import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Gallery.module.css';

import imgAbout from '../asset/about.png';
import imgBuilding2 from '../asset/building 2.png';
import imgBuilding3 from '../asset/building 3.png';
import imgBuilding4 from '../asset/building 4.png';
import imgBuilding from '../asset/building.png';
import imgLiftLobby from '../asset/lift lobby.png';
import imgParking from '../asset/parking.png';

const images = [
  { id: 1, group: 'Exterior', url: imgBuilding, span: 'span 2' },
  { id: 2, group: 'Lift Lobby', url: imgLiftLobby, span: 'span 1' },
  { id: 3, group: 'Building View', url: imgBuilding2, span: 'span 1' },
  { id: 5, group: 'Architecture', url: imgBuilding3, span: 'span 1' },
  { id: 6, group: 'Parking Area', url: imgParking, span: 'span 1' },
  { id: 7, group: 'Modern Design', url: imgBuilding4, span: 'span 1' },
  { id: 8, group: 'About Cybernex', url: imgAbout, span: 'span 2' },
];

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.section} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Photo Gallery</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.grid} ref={ref}>
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              className={styles.imageCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <div className={styles.imageWrapper}>
                <img src={img.url} alt={img.group} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.label}>{img.group}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              src={selectedImage.url} 
              alt={selectedImage.group}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✕</button>
            <div className={styles.lightboxLabel}>{selectedImage.group}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
