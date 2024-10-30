import React from 'react';
import styles from './map.module.css';

export default function MapSection() {
  return (
    <div className={styles.mapSection}>
      <h2 className={styles.heading}>Our Location</h2>
      <p className={styles.description}>Find us at our office location shown on the map below.</p>
      
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4725369078987!2d144.9640576153178!3d-37.81720977975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615915013077!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
