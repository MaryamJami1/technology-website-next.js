import React from 'react'
import styles from '../Customs/custom.module.css'
import Icon from '../../public/custom/1.svg';
import Icon2 from '../../public/custom/2.svg';
import Icon3 from '../../public/custom/3.svg';
import Icon4 from '../../public/custom/4.svg';
import Icon5 from '../../public/custom/5.svg';
import Icon6 from '../../public/custom/6.svg';
import Icon7 from '../../public/custom/7.svg';
import Marquee from '../Marquee/marquee';

export default function Custom() {
    return (
        <div>
            <div className={styles.content}>
                <p className={styles.linebefore}>Custom Prompts</p>
                <h2>The Future is Here<br />Embrace AI Iconnology</h2>
            </div>

            <div className={styles.buttons}>
                <button className={styles.btn}><Icon/> Icon Support</button>
                <button className={styles.btn}><Icon2/> Robo Genius</button>
                <button className={styles.btn}><Icon3/> Vision AI Tech</button>
                <button className={styles.btn}><Icon4/> Blockchain Data</button>
                <button className={styles.btn}><Icon5/> Data Interface</button>
                <button className={styles.btn}><Icon6/> Digital Business</button>
                <button className={styles.btn}><Icon7/> Open AI Tech</button>
            </div>

            <Marquee/>
        </div>
    )
}
