import React from 'react';
import styles from './btn.module.css';

interface Iprops {
  text: string;
  className?: string;
}

export default function Btn(props: Iprops) {
  return (
    <button className={`${styles.btn} ${props.className || ''}`}>
      {props.text}
    </button>
  );
}

