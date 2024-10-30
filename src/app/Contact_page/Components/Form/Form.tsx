import React from 'react'
import styles from './form.module.css'

export default function Form() {
  return (



    <div className={styles.contactFormSection}>
      <h2>Contact with Us!</h2>
      <p className={styles.introText}>Have Any Questions?</p>
      <p className={styles.introText}>
        Enthusiastically disintermediate one-to-one leadership via business e-commerce.
        Dramatically reintermediate compelling process improvements rather than empowered relationships.
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className={styles.formGroup}>
          <input type="email" id="email" placeholder="Email Address" required />
        </div>

        <div className={styles.formGroup}>
          <input type="text" id="subject" placeholder="Select Subject" required />
        </div>

        <div className={styles.formGroup}>
          <input type="tel" id="phone" placeholder="Phone Number" />
        </div>

        <div className={styles.formGroup}>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  )
}
