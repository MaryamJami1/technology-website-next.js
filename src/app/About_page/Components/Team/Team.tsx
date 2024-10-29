import React from 'react'
import Link from 'next/link'
import styles from './team.module.css'
export default function Team() {
    return (
        <div>
            <div className={styles.team_header}>
                <h2 className={styles.linebefore}>Our Team</h2>
                <h2 className={styles.team}>See Our Skilled Expert <span className={styles.span}>Team</span></h2>
            </div>

            <div className={styles.team_container}>
                <div className={styles.team_member}>
                    <div className={styles.team_image} style={{ backgroundImage: "url('team/team_1_4.jpg')" }}></div>
                    <div className={styles.team_info}>
                        <h4>Ann Yong</h4>
                        <p>Marketing Consultant</p>
                    </div>
                    <ul className={styles.team_links}>
                        <li><a href="https://www.linkedin.com/login">LinkedIn |</a></li>
                        <li><a href="https://www.facebook.com/login/">Facebook |</a></li>
                        <li><a href="https://www.google.co.uk/">Google</a></li>
                    </ul>
                </div>


                <div className={styles.team_member}>
                    <div className={styles.team_image} style={{ backgroundImage: "url('team/team_1_3.jpg')" }}></div>
                    <div className={styles.team_info}>
                        <h4>Ann Yong</h4>
                        <p>Marketing Consultant</p>
                    </div>
                    <ul className={styles.team_links}>
                        <li><a href="https://www.linkedin.com/login">LinkedIn |</a></li>
                        <li><a href="https://www.facebook.com/login/">Facebook |</a></li>
                        <li><a href="https://www.google.co.uk/">Google</a></li>
                    </ul>
                </div>


                <div className={styles.team_member}>
                    <div className={styles.team_image} style={{ backgroundImage: "url('team/team_1_1.jpg')" }}></div>
                    <div className={styles.team_info}>
                        <h4>Ann Yong</h4>
                        <p>Marketing Consultant</p>
                    </div>
                    <ul className={styles.team_links}>
                        <li><a href="https://www.linkedin.com/login">LinkedIn |</a></li>
                        <li><a href="https://www.facebook.com/login/">Facebook |</a></li>
                        <li><a href="https://www.google.co.uk/">Google</a></li>
                    </ul>
                </div>


                <div className={styles.team_member}>
                    <div className={styles.team_image} style={{ backgroundImage: "url('team/team_1_5.jpg')" }}></div>
                    <div className={styles.team_info}>
                        <h4>Ann Yong</h4>
                        <p>Marketing Consultant</p>
                    </div>
                    <ul className={styles.team_links}>
                        <li><a href="https://www.linkedin.com/login">LinkedIn |</a></li>
                        <li><a href="https://www.facebook.com/login/">Facebook |</a></li>
                        <li><a href="https://www.google.co.uk/">Google</a></li>
                    </ul>
                </div>

            </div>
        </div>

    )
}
