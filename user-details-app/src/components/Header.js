'use client';

import Image from 'next/image';
import IconsList from './IconsList';
import Link from 'next/link';

import './Header.scss';

export default function Header({ headerIcons }) {
  return (
    <div className='header-section'>
      <div className='search-input'>
        <Image className='search-icon' src={'/images/navigationIcons/search.svg'} width={20} height={20} alt='search' />
        <input type='search' name='search' placeholder={'search pipedrive'} />
      </div>
      <Link href={'/'}>
        <Image className='logo' src={'/images/svg/RCRM-Logo-Watermark.svg'} width={160} height={35} alt='RCRM-Logo' />
      </Link>
      <div className='icons-section'>
        {headerIcons && <IconsList icons={headerIcons} />}
        <div className='user-info'>
          <Image src={'/images/navigationIcons/userIcon.svg'} width={36} height={36} alt='userIcon' />
          <div><strong>Phyllis Yang</strong> <br></br> Silicon Links Inc</div>
        </div>
      </div>
    </div>
  )
}

