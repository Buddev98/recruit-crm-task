'use client';

import { useState } from 'react';
import './IconsList.scss';

export default function IconsList({ icons = [], position = '' }) {
  const [clicked, setClicked] = useState('');

  function handleClick(position) {
    console.log('clicked', position);
  }



  return (
    <ul className='icons-list'>
      {icons.map(icon => <li key={icon.name} className={!icon.showInMoblie ? 'hide-icon' : ''}><button className='icon-btn' onClick={() => handleClick(position)}><img className={icon.isUserIcon && 'user-icon'} src={icon.srcPath} alt={icon.name} /></button></li>)}
    </ul>
  )
}

