
import styles from './hero.module.css';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/About_page" className={styles.link}>About us</Link>
          <span className={styles.separator}> / </span>
          <span className={styles.current}>About Us</span>
        </div>
      </div>
    </div>
    );
}
