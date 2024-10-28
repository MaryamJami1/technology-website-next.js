import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'

export default function hero() {
    return (
        <div className={styles.bg}>
            <div className={styles.img_div}>
                <Image
                    src={'/about/about_9_1.jpg'}
                    alt={"robot"}
                    height={650}
                    width={620}
                    className={styles.img}
                />
            </div>

            <div className={styles.text}>
                <p className={styles.linebefore}>About us</p>
                <h3>Smart Solutions, Smarter<br /> Future AI Leading the <br /> Way</h3>
                <p className={styles.para}>Artificial Intelligence (AI) refers to the development of <br /> computer systems that can perform tasks that typically require <br />human intelligence. These tasks include learning, reasoning, <br />problem-solving, perception.</p>


                <div className={styles.aiMain}>
                    <div className={styles.ai}>

                    </div>
                    <div className={styles.two}>
                        <div className={styles.child_1}><h3>62M</h3><p>Satisfied Customers</p></div>
                        <div className={styles.child_2}><h3>16k</h3><p>Creative Professional</p></div>
                    </div>
                </div>
            </div>

        </div>

    )
}
