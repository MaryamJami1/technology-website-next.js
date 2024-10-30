import React from 'react';


interface Iprops {
  text: string;
  className?: string;
}

export default function Btn(props: Iprops) {
  return (
    <button className={` ${props.className || ''}`}>
      {props.text}
    </button>
  );
}

