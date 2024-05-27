'use client';

import { useState } from 'react';
import './IconsList.scss';
import Image from 'next/image';

export default function IconsList({ icons = [], position = '' }) {
  const [clicked, setClicked] = useState('');
  let positionClass =
    position === 'notifications'
      ? 'notifications-icons'
      : position === 'side'
      ? 'navigation-icons'
      : '';

  function handleClick(position, iconName) {
    setClicked(iconName);
    console.log('clicked', position);
  }

  return (
    <ul className="icons-list">
      {icons.map((icon) => (
        <li
          key={icon.name}
          className={`${
            clicked === icon.name ? 'active' : ''
          } ${positionClass} ${!icon.showInMobile ? 'hide-icon' : ''}`}>
          <button
            className="icon-btn"
            onClick={() => handleClick(position, icon.name)}>
            <Image
              className={icon.isUserIcon && 'user-icon'}
              src={icon.srcPath}
              alt={icon.name}
              width={15}
              height={15}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
