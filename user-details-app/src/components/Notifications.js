'use client';

import { useState } from 'react';
import IconsList from './IconsList';
import NotificationCard from './NotificationCard';

import './Notifications.scss';

export default function Notifications({ notificationsIcons, notificationFilters, notifications }) {
  const [clicked, setClicked] = useState('All');
  const [notificationData, setNotificationData] = useState(notifications ? notifications : []);

  function filterNotifications(id) {
    setClicked(id);
    if(id === 'All' || id === 'Files') {
      setNotificationData(notifications);
    } else if(id === 'Notes') { 
      const filteredData = notifications?.filter(item => (item.id === 'Note' || item.id === 'Call'));
      setNotificationData(filteredData);
    } else {
      const filterId = id.substring(0, id.length - 1);
      const filteredData = notifications?.filter(item => item.id === filterId);
      setNotificationData(filteredData);
    }
  }

  return (
    <div className='notifications-section'>
      <IconsList icons={notificationsIcons} position='notifications' />
      <div className='notifications'>
        <ul className='filter-options'>
          {notificationFilters?.map((item) => <li key={item.id}><button className={`${clicked === item.id ? 'active' : ''}`} id={item.id} onClick={() => filterNotifications(item.id)}>{item.name}</button></li>)}
        </ul>
        <div className='notification-cards-list'>
          {notificationData?.map((item) => <NotificationCard key={item} data={item}/>)}
        </div>
      </div>
    </div>
  )
}

