'use client';

import Image from 'next/image';
import IconsList from './IconsList';

import './Header.scss';

export default function Header({ headerIcons }) {
  const placeholder = [, ]
  return (
    <div className='header-section'>
      <div>
        <Image src={'/images/navigationIcons/search.svg'} width={20} height={20} />
        <input type='search' name='search' placeholder={'search pipedrive'} />
      </div>
      <Image src={'/images/svg/RCRM-Logo-Watermark.svg'} width={160} height={35} alt='RCRM-Logo' />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconsList icons={headerIcons} />
        <div style={{ display: 'flex' }}>
          <Image src={'/images/navigationIcons/userIcon.svg'} width={36} height={36} alt='userIcon' />
          <div><strong>Phyllis Yang</strong> <br></br> Silicon Links Inc</div>
        </div>
      </div>
    </div>
  )
}
