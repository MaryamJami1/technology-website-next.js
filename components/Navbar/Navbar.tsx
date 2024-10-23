
"use client"; 

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Btn from '../../components/Button/Btn';
import Logo from '../../public/hero/logo-white2.svg';
export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>
          <Logo />
        </h1>
        <ul className={styles.ul}>
        <li><Link href="/about" className={styles.link}>Home</Link></li>
          <li><Link href="/about" className={styles.link}>About</Link></li>
          <li><Link href="/pages" className={styles.link}>Pages</Link></li>
          <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        </ul>
        <Btn text={"Join Community"} />
      </div>
    </nav>
  );
}

