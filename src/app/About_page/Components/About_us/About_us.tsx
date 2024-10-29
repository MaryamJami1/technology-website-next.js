'use client'
import Image from 'next/image';
import styles from './about.module.css';
import CountUp from 'react-countup';

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageDiv}>
                <Image src="/about_section/business-professional-adult-team-woman_1301-1767.jpg" alt="About Image" layout="fill" objectFit="cover" className={styles.img} />
                <div className={styles.circle}>
                    <CountUp end={25} duration={5} className={styles.counter} />
                    <div className={styles.years}>Years</div>
                </div>
            </div>
            <div className={styles.textDiv}>
                <h2 className={styles.linebefore}>About Us</h2>
                <h2 className={styles.h2}>We Are Increasing Business <br /> Success With <span className={styles.span}>IT Solution</span></h2>
                <p className={styles.para}>Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate competitive resource and holistic synergy. Uniquely generate efficient schemas before future.</p>




            </div>
        </div>
    );
};

export default About;
