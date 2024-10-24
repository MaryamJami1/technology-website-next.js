import React from 'react'
import styles from '../Studies/studies.module.css'
import Btn from '../button/Btn'

export default function Studies() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <p className={styles.linebefore}>Case Studies</p>
                <h2>Web<span>teck</span> Latest Artificial <br /> Intelligence Case Studies</h2>
            </div>

            <div className={styles.projects}>
                <div className={styles.img1}></div>
                <div className={styles.img2}></div>
                <div className={styles.img3}></div>
            </div>
            
            <div className={styles.content2}>
                <p className={styles.linebefore2}><Btn text={"All Case Studies"} /></p>
              
            </div>
        </div>
    )
}
