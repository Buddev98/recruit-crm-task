'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStart } from '@/redux/slices/userDetails';
import { useParams } from 'next/navigation';

import IconsList from './IconsList';
import Image from 'next/image';

import './AccountDetails.scss';

export default function AccountDetails({ editMode = false, setEditMode = () => {}, bodyObj = {}, btnList = [], socialMediaIcons = [] }) {
  const dispatch = useDispatch();
  const { userId = '' } = useParams();
  const [clicked, setClicked] = useState('');
  const {
    data: { id = '', personalDetails: { 
      userName = '',
      email = '',
      phoneNumber = '',
      position = '',
      state = '',
      city = '',
      contactLinked = false
    } = {} } = {},
  } = useSelector(({ userDetails }) => userDetails);

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
  const dateTime = new Date();
  const date = dateTime.toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', hour12: true, minute: '2-digit' });
  return (
    <>
    <div className='breadcrumb-section'>
      <p><label className='color-blue'>Candidates &gt;</label><label>{userName}<span>ID-23{id}</span></label></p>
      <div>
        <button className='active'><label>Request Profile Update</label></button>
        <button><label>Previous</label></button>
        <button><label>next</label></button>
      </div>
    </div>
    <div className='account-details'>
      <div className='account-info'>
        <div><Image className='profile-icon' src={'/images/navigationIcons/profile-icon.svg'} width={40} height={40} alt='profile' /></div>
        <div>
          <div className='user-info'><label>{userName}</label> <IconsList icons={socialMediaIcons} /></div>
          <p className='location-info'><span>{position}</span> <span>{state}</span> <span>{city}</span></p>
        </div>
      </div>
      <div className='btn-options'>
        {btnList?.map((item) => <button key={item.id} className={`${item.id === 'contact' ? 'contact' : ''} ${item.id === clicked ? 'active' : ''} ${(item.isLinked && contactLinked) ? 'linked' : 'not-linked' }`} id={item.id} onClick={() => handleClick(item)} >{item.name ? item.name : <Image src={`/images/navigationIcons/${item.icon}.svg`} width={15} height={15} alt='user' />}</button>)}
      </div>
    </div>
    <div className='contact-info'>
      <p>
        <span><Image className='profile-icon' src={'/images/navigationIcons/mail.svg'} width={15} height={15} alt='profile' /> <label className='color-blue'>{email}</label></span>
        <span><Image className='profile-icon' src={'/images/navigationIcons/phone-call.svg'} width={15} height={15} alt='phone' /> <label className='color-blue'>{phoneNumber}</label></span>
      </p>
      <p>
        <span className='color-black'><Image src={'/images/navigationIcons/user-name.svg'} width={12} height={12} alt='user' /> {userName}</span>
        <span className='color-black'><Image src={'/images/navigationIcons/clock-grey.svg'} width={14} height={14} alt='clock' /> {date}</span>
      </p>
    </div>
    </>
  )
}

