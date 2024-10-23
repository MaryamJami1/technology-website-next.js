import React from 'react'
import styles from './experience.module.css'
import Service from '../../public/expereince/service_2_1.svg';
import Service2 from '../../public/expereince/service_2_2.svg';
import Service3 from '../../public/expereince/service_2_3.svg';
import Service4 from '../../public/expereince/service_2_4.svg';
import Shape from '../../public/expereince/ser-shape.svg';
import Image from 'next/image';

export default function Expereince() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <p className={styles.linebefore}>what we do</p>
                <h2>Generate Creative AI Copy On-The- <br /> Spot, Across Your Favorite Tools</h2>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box4}>
                    <div className={styles.card} ><Service /><h2>Image generator</h2> <p>Artificial Intelligence (AI) refers to the development of computer systems that can perform.</p></div>
                    <div className={styles.card}><Service2 /><h2>Image generator</h2> <p>Artificial Intelligence (AI) refers to the development of computer systems that can perform.</p></div>
                    <div className={styles.card}><Service3 /><h2>Image generator</h2> <p>Artificial Intelligence (AI) refers to the development of computer systems that can perform.</p></div>
                    <div className={styles.card}><Service4 /><h2>Image generator</h2> <p>Artificial Intelligence (AI) refers to the development of computer systems that can perform.</p></div>
                </div>

                <div className={styles.box1}>
                    <div className={styles.shape}>
                        <h2>We build digital experiences.</h2> <Shape />

                    </div>
                    <p className={styles.para}><span>5,000</span>+ clients across <br /> 25 countries.</p>
                    <div>
                        <Image
                            src={'/expereince/service_2.png'}
                            alt={"robot"}
                            height={330}
                            width={450}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
