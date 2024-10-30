"use client"; 

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Btn from '../../../components/button/Btn';
import Logo from '../../../public/hero/logo-white2.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu open/close state
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <h1 className={styles.logo}>
          <Logo />
        </h1>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isOpen ? (
            <span>&times;</span>
          ) : (
            <span>&#9776;</span> 
          )}
        </button>
        <ul className={`${styles.ul} ${isOpen ? styles.menuOpen : ''}`}>
          <li><Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/About_page" className={styles.link} onClick={toggleMenu}>About</Link></li>
          <li><Link href="/Contact_page" className={styles.link} onClick={toggleMenu}>Contact</Link></li>
        </ul>
        <Btn text={"Join Community"} className={styles.btn} />
      </div>
    </nav>
  );
}
