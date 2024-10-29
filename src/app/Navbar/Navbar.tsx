
"use client"; 

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Btn from '../../../components/button/Btn';
import Logo from '../../../public/hero/logo-white2.svg'




export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>
          <Logo/>
        </h1>
        <ul className={styles.ul}>
        
        <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/About_page" className={styles.link}>About</Link></li>
          <li><Link href="/Contact_page" className={styles.link}>Contact</Link></li>
        </ul>
        <Btn text={"Join Community"} />
      </div>
    </nav>
  );
}

