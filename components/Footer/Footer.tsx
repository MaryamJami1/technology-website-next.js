import React from 'react'
import styles from './footer.module.css'
import { FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';



export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.text}>
                <p>Copyright 2024 <span> WebTeck </span>. All Rights Reserved.</p>
            </div>
            <div className={styles.icons}>
          <Link href={'https://www.facebook.com/'} className={styles.link}><RiFacebookFill className={styles.icon}/></Link>  

          <Link href={'https://www.linkedin.com/signup'} className={styles.link}> <FaLinkedinIn className={styles.icon}/></Link> 

          <Link href={'https://twitter.com/login'} className={styles.link}> <FaTwitter className={styles.icon}/></Link> 
          <Link href={'https://www.youtube.com/'} className={styles.link}> <FaYoutube className={styles.icon} /></Link> 



            </div>
        </div>
    )
}
