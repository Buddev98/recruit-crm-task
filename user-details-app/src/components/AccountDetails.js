'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStart } from '@/redux/slices/userDetails';
import { useParams } from 'next/navigation';

import IconsList from './IconsList';
import Image from 'next/image';

import './AccountDetails.scss';

export default function AccountDetails({ editMode = false, setEditMode = () => {}, bodyObj = {} }) {
  const dispatch = useDispatch();
  const { userId = '' } = useParams();
  const [clicked, setClicked] = useState('');
  const {
    data: { personalDetails: { 
      userName = '',
      email = '',
      phoneNumber = '',
      position = '',
      state = '',
      city = '',
      contactLinked = false
    } = {} } = {},
  } = useSelector(({ userDetails }) => userDetails);

  const btnList = [
    { id: 'contact', name: 'Contact Linked', isLinked: false },
    { id: 'Favourite', icon: 'star' },
    { id: 'save', icon: 'save' },
    { id: 'edit', icon: 'edit' },
    { id: 'more', icon: 'more' },
  ];

  useEffect(() => {
    dispatch(userDetailsStart());
  }, []);
  
  
  function handleClick(btn) {
    setClicked(btn.id);
    if(btn.id === 'edit') {
      setEditMode(!editMode);
    } else if(btn.id === 'save') {
      setEditMode(false);
      (bodyObj?.objects && Object.keys(bodyObj?.objects)?.length > 0) && dispatch(userDetailsStart({ bodyObj: bodyObj?.objects, method: 'PATCH', userId }));
    }
  }

  return (
    <>
    <div className='account-details'>
      <div className='account-info'>
        <div><Image className='profile-icon' src={'/images/navigationIcons/profile-icon.svg'} width={40} height={40} alt='profile' /></div>
        <div>
          <div><label>{userName}</label> <IconsList /></div>
          <p><span>{position}</span> <span>{state}</span> <span>{city}</span></p>
        </div>
      </div>
      <div className='btn-options'>
        {btnList.map((item) => <button className={`${item.id === 'contact' ? 'contact' : ''} ${item.id === clicked ? 'active' : ''} ${(item.isLinked && contactLinked) ? 'linked' : 'not-linked' }`} id={item.id} onClick={() => handleClick(item)} >{item.name ? item.name : <Image src={`/images/navigationIcons/${item.icon}.svg`} width={15} height={15} alt='user' />}</button>)}
      </div>
    </div>
    <div className='contact-info'>
      <span><Image className='profile-icon' src={'/images/navigationIcons/messages-grey.svg'} width={20} height={20} alt='profile' /> <label>{email}</label></span>
      <span><Image className='profile-icon' src={'/images/navigationIcons/phone-icon.svg'} width={15} height={15} alt='phone' /> <label>{phoneNumber}</label></span>
    </div>
    </>
  )
}

