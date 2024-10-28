import React from 'react'
import styles from "./hero.module.css"
import Image from 'next/image'
import Btn from '../button/Btn';
export default function hero() {
  return (
    <header>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1>The Technology <br/> Beyond Artificial <br /> Intelligent</h1>
          <p>We provide many features that you can use cheaply and easily. Try it <br/> now and get an interesting promo</p>
         <Btn text={'Get Started Now'}/>
        </div>
        <div>
          <Image
            src={'/hero/hero_bg_10_1.png'}
            alt={"robot"}
            height={640}
            width={500}
            className={styles.img}
          />
        </div>
      </div>
    </header>
  )
}
