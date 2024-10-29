import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>About Us</h1>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <span className={styles.separator}> / </span>
          <span className={styles.current}>About Us</span>
        </div>
      </div>
    </div>
  );
}
