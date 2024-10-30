import React from 'react'
import styles from './marquee.module.css'
import Star from '../../public/custom/star2.svg'


export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles['marquee-content']}>
        <h2><Star /> Image Generator</h2>
        <h2><Star /> Generate Content</h2>
        <h2><Star /> Algorithmic Solution</h2>
        <h2><Star /> NFT Creator</h2>
        <h2><Star /> Image Generator</h2>
        <h2><Star /> Generate Content</h2>
        <h2><Star /> Algorithmic Solution</h2>
        <h2><Star /> NFT Creator</h2>
        <h2><Star /> Image Generator</h2>
        <h2><Star /> Generate Content</h2>
        <h2><Star /> Algorithmic Solution</h2>
        <h2><Star /> NFT Creator</h2>
        <h2><Star /> Image Generator</h2>
        <h2><Star /> Generate Content</h2>
        <h2><Star /> Algorithmic Solution</h2>
        <h2><Star /> NFT Creator</h2>
      </div>
    </div>
  );
}