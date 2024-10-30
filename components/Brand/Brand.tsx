import React from 'react'
import styles from '../Brand/brand.module.css'
import Brand1 from '../../public/brand/brand_4_1.svg'
import Brand2 from '../../public/brand/brand_4_2.svg'
import Brand3 from '../../public/brand/brand_4_3.svg'
import Brand4 from '../../public/brand/brand_4_4.svg'
import Brand5 from '../../public/brand/brand_4_5.svg'
import Brand6 from '../../public/brand/brand_4_6.svg'


export default function Brand() {
    return (
        <div>
            <div className={styles.hr}> </div>
            <div className={styles.content}>
                <div className={styles.brand}>
                    <Brand1 />
                    <Brand2 />
                    <Brand5 />
                    <Brand3 />
                    <Brand4 />
                    <Brand6 />

                </div>
            </div>
            <div className={styles.hr}> </div>

        </div>
    )
}
