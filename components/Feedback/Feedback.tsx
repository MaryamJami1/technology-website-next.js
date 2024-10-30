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
                                <p>Working with this firm has been an exceptional experience. <br /> Their professionalism and attention to detail truly stand out. <br /> They listened to my needs and provided tailored solutions. <br /> The communication throughout the process was top-notch. <br /> I would highly recommend their services to anyone <br /> seeking quality support.</p>                            </div>

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
                                <p>Working with this firm has been an exceptional experience. <br /> Their professionalism and attention to detail truly stand out. <br /> They listened to my needs and provided tailored solutions. <br /> The communication throughout the process was top-notch. <br /> I would highly recommend their services to anyone <br /> seeking quality support.</p> 

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
                                <p>Working with this firm has been an exceptional experience. <br /> Their professionalism and attention to detail truly stand out. <br /> They listened to my needs and provided tailored solutions. <br /> The communication throughout the process was top-notch. <br /> I would highly recommend their services to anyone <br /> seeking quality support.</p>  

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