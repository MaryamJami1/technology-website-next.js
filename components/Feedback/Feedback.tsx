import React from 'react'
import styles from './feedback.module.css'
import Image from 'next/image'
import Logo from '../../public/feedback/quote2.svg';

export default function feedback() {
    return (
        <div className={styles.bg}>
            <div className={styles.text}>
                <p className={styles.linebefore}>Client Feedbacks</p>
                <h3>See what our clients have to<br /> Say</h3>
            </div>

            <div className={styles.carousel}>
                <div className={styles.carouselContent}>
                    <div className={styles.carouselItem}>
                        <div className={styles.img}>
                            <div>
                                <Image src={'/feedback/testi_img_2.png'} alt={'logo'} width={120} height={50} />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, explicabo?Lorem <br />ipsum dolor sit amet consectetur adipisicing elit.  maxime? <br />ipsum dolor sit amet consectetur adipisicing Lorem, ipsum. Lorem ipsum d elit.  <br />ipsum dolor sit amet consectetur adipisicing elit. </p>

                            </div>

                            <div className={styles.div2}>
                                <Image src={'/feedback/testi_2_2.png'} alt={'logo'} width={50} height={50} />
                                <p>Savannah Nagueyen.</p>

                                <Logo className={styles.logo} />
                            </div>
                        </div>
                    </div>



                    <div className={styles.carouselItem}>
                        <div className={styles.img}>
                            <div>
                                <Image src={'/feedback/testi_img_2.png'} alt={'logo'} width={120} height={50} />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, explicabo?Lorem <br />ipsum dolor sit amet consectetur adipisicing elit.  maxime? <br />ipsum dolor sit amet consectetur adipisicing Lorem, ipsum. Lorem ipsum d elit.  <br />ipsum dolor sit amet consectetur adipisicing elit. </p>

                            </div>

                            <div className={styles.div2}>
                                <Image src={'/feedback/testi_2_1.png'} alt={'logo'} width={50} height={50} />
                                <p>Brooklyn Simmons.</p>

                                <Logo className={styles.logo} />
                            </div>

                        </div>
                    </div>


                    <div className={styles.carouselItem}>
                        <div className={styles.img}>
                            <div>
                                <Image src={'/feedback/testi_img_2.png'} alt={'logo'} width={120} height={50} />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, explicabo?Lorem <br />ipsum dolor sit amet consectetur adipisicing elit.  maxime? <br />ipsum dolor sit amet consectetur adipisicing Lorem, ipsum. Lorem ipsum d elit.  <br />ipsum dolor sit amet consectetur adipisicing elit. </p>

                            </div>

                            <div className={styles.div2}>
                                <Image src={'/feedback/testi_2_3.png'} alt={'logo'} width={50} height={50} />
                                <p>Andre D.Smith John</p>

                                <Logo className={styles.logo} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

           
        </div>
    )
}