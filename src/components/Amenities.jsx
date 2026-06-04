import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Amenities.module.css';

const floorData = [
  {
    floor: "1st Floor",
    items: [
      { name: "Training Room & Conference Room", count: "1 Nos" },
      { name: "Pantry", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "170 Nos" },
      { name: "Cabin", count: "4 Nos" },
      { name: "Meeting Room", count: "6 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct AC", count: "5 Nos" },
      { name: "Store Room", count: "1 Nos" },
      { name: "Full Height Storage", count: "6 Nos" },
      { name: "Low Height Storage", count: "6 Nos" },
      { name: "4 wheeler", count: "2 Nos" },
      { name: "2 wheeler", count: "50 Nos" },
    ]
  },
  {
    floor: "2nd Floor (South)",
    items: [
      { name: "Training Room & Conference Room", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "39 Nos" },
      { name: "Cabin", count: "2 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Split AC", count: "11 Nos" },
      { name: "Reception", count: "1 Nos" },
      { name: "WorshipRoom", count: "1 Nos" },
      { name: "Full Height Storage", count: "6 Nos" },
      { name: "Low Height Storage", count: "6 Nos" },
      { name: "4 wheeler", count: "2 Nos" },
      { name: "2 wheeler", count: "25 Nos" },
    ]
  },
  {
    floor: "2nd Floor (North)",
    items: [
      { name: "Conference Room", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "50 Nos" },
      { name: "Cabin", count: "4 Nos" },
      { name: "Meeting Room", count: "1 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct/Split AC", count: "9 Nos" },
      { name: "Reception", count: "1 Nos" },
      { name: "Pantry", count: "1 Nos" },
      { name: "Wet Pantry", count: "1 Nos" },
      { name: "Full Height Storage", count: "46 Nos" },
      { name: "Low Height Storage", count: "15 Nos" },
      { name: "4 wheeler", count: "4 Nos" },
      { name: "2 wheeler", count: "25 Nos" },
    ]
  },
  {
    floor: "3rd Floor",
    items: [
      { name: "Conference Room", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "127 Nos" },
      { name: "Cubicle", count: "6 Nos" },
      { name: "Cabin", count: "1 Nos" },
      { name: "Meeting Room", count: "3 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Handicap Washroom", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Split AC", count: "1 Lumsum" },
      { name: "Reception", count: "1 Nos" },
      { name: "Cafeteria", count: "1 Nos" },
      { name: "4 wheeler", count: "4 Nos" },
      { name: "2 wheeler", count: "25 Nos" },
    ]
  },
  {
    floor: "4th Floor",
    items: [
      { name: "Training Room & Conference Room", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "181 Nos" },
      { name: "Cabin", count: "3 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct & Split AC", count: "11 Nos" },
      { name: "Full Height Storage", count: "10 Nos" },
      { name: "Low Height Storage", count: "6 Nos" },
      { name: "4 wheeler", count: "3 Nos" },
      { name: "2 wheeler", count: "30 Nos" },
    ]
  },
  {
    floor: "5th Floor",
    items: [
      { name: "Training Room & Conference Room", count: "1 Nos" },
      { name: "Pantry", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "185 Nos" },
      { name: "Cabin", count: "3 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct & Split AC", count: "9 Nos" },
      { name: "Full Height Storage", count: "6 Nos" },
      { name: "Low Height Storage", count: "6 Nos" },
      { name: "4 wheeler", count: "2 Nos" },
      { name: "2 wheeler", count: "30 Nos" },
    ]
  },
  {
    floor: "6th Floor",
    items: [
      { name: "Conference Room", count: "2 Nos" },
      { name: "Pantry", count: "1 Nos" },
      { name: "Electrical Room", count: "1 Nos" },
      { name: "Workstation", count: "52 Nos" },
      { name: "Cabin", count: "9 Nos" },
      { name: "Meeting Room", count: "2 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct & Split AC", count: "9 Lot" },
      { name: "Reception Area", count: "1 Nos" },
      { name: "4 wheeler", count: "5 Nos" },
      { name: "2 wheeler", count: "10 Nos" },
    ]
  },
  {
    floor: "7th Floor",
    items: [
      { name: "Training Room & Conference Room", count: "1 Nos" },
      { name: "Open Terrace", count: "1 Nos" },
      { name: "Electrical DB", count: "1 Nos" },
      { name: "Meeting Room", count: "1 Nos" },
      { name: "Reception", count: "1 Nos" },
      { name: "Workstation", count: "44 Nos" },
      { name: "Cabin", count: "3 Nos" },
      { name: "Server Room / UPS Room", count: "1 Nos" },
      { name: "Ladies Toilet", count: "1 Nos" },
      { name: "Gents Toilet", count: "1 Nos" },
      { name: "Lights Fittings", count: "1 Lot" },
      { name: "A.C. System Duct AC", count: "2 Nos" },
      { name: "Full Height Storage", count: "6 Nos" },
      { name: "Low Height Storage", count: "8 Nos" },
      { name: "4 wheeler", count: "2 Nos" },
      { name: "2 wheeler", count: "10 Nos" },
    ]
  }
];

const Amenities = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section} id="amenities">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Floor-Wise Features & Amenities</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.tabs} ref={ref}>
          {floorData.map((data, index) => (
            <button
              key={index}
              className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {data.floor}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className={styles.tableWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, cubicBezier: [0.25, 0.46, 0.45, 0.94] }}
          >
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Details</th>
                  <th>Qty</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {floorData[activeTab].items.map((item, idx) => {
                  const parts = item.count.split(' ');
                  const qty = parts[0];
                  const unit = parts.slice(1).join(' ') || '-';
                  
                  return (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{item.name}</td>
                      <td>{qty}</td>
                      <td>{unit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Amenities;
