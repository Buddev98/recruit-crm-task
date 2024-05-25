'use client';

import { useState } from 'react';
import './IconsList.scss';

export default function IconsList({ icons = [], position = '' }) {
  const [clicked, setClicked] = useState('');
  let positionClass = position === 'notifications' ? 'notifications-icons' : position === 'side' ? 'navigation-icons' : '';

  function handleClick(position, iconName) {
    setClicked(iconName)
    console.log('clicked', position);
  }



  return (
    <ul className='icons-list'>
      {icons.map(icon => <li key={icon.name} className={`${clicked === icon.name ? 'active' : ''} ${positionClass} ${!icon.showInMoblie ? 'hide-icon' : ''}`}><button className='icon-btn' onClick={() => handleClick(position, icon.name)}><img className={icon.isUserIcon && 'user-icon'} src={icon.srcPath} alt={icon.name} /></button></li>)}
    </ul>
  )
}

