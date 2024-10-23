import React from 'react'
import styles from "./hero.module.css"
import Btn from '../Button/Btn'
export default function hero() {
  return (
    <header>
      <div className={styles.bg}>
<div className="text">
  <h1></h1>
  <p></p>
  <Btn text={'Get Started Now'}/>
</div>
<div className="img">

</div>
      </div>
    </header>
  )
}
