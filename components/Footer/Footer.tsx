import React from 'react'
import styles from './footer.module.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";



export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.text}>
                <p>Copyright 2024 <span> WebTeck </span>. All Rights Reserved.</p>
            </div>
            <div className={styles.icon}>
                <FaFacebookF />

                <FaLinkedinIn />

                <FaTwitter />
                <FaYoutube />



            </div>
        </div>
    )
}
