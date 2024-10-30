import React from 'react'
import styles from './contact.module.css'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
export default function ContactUs() {
    return (

        <>
            <h2 className={styles.linebefore}>Connect with us</h2>
            <div className={styles.contactSection}>

                <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <FiMail className={styles.icon} />
                    </div>
                    <h2 className={styles.h2}>Email Us</h2>
                    <p className={styles.p}>Reach at contact@example.com for any inquiries or support.</p>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <FiPhone className={styles.icon} />
                    </div>
                    <h2 className={styles.h2}>Call Us</h2>
                    <p className={styles.p}>Our support team is available 24/7 at +1 234 567 890.</p>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.iconWrapper}>
                        <FiMapPin className={styles.icon} />
                    </div>
                    <h2 className={styles.h2}>Visit Us</h2>
                    <p className={styles.p}>Stop by our office at 123 Example Street, City, Country.</p>
                </div>
            </div>

        </>
    );
}