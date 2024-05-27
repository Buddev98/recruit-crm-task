'use client';

import IconsList from "./IconsList";
import './AccountDetails.scss';
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsStart } from "@/redux/slices/userDetails";

export default function AccountDetails() {
  const dispatch = useDispatch();
  const {
    data = {},
  } = useSelector(({ userDetails }) => userDetails);
  console.log(data, '----------------->')
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
    if(btn.id === 'edit') {
      console.log('editmode');
    }
    console.log(btn);
  }

  return (
    <div className="account-details">
      <div className="account-info">
        <div><Image className='profile-icon' src={'/images/navigationIcons/profile-icon.svg'} width={40} height={40} alt='profile' /></div>
        <div>
          <div><span>William Sample</span> <IconsList /></div>
          <p><span>Senior Product Manager</span> <span>United States</span> <span>Dallas</span></p>
        </div>
      </div>
      <div className="btn-options">
        {btnList.map((item) => <button className={`${item.id === 'contact' ? 'contact' : ''} ${item.isLinked ? 'linked' : 'not-linked' }`} id={item.id} onClick={() => handleClick(item)} >{item.name ? item.name : <Image src={`/images/navigationIcons/${item.icon}.svg`} width={20} height={20} alt="user" />}</button>)}
      </div>
    </div>
  )
}

