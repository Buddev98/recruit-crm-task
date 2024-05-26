'use client';

import { useState } from 'react';

import './JobDetails.scss';
import Jobs from './Jobs';


export default function JobDetails({ detailsFilter, jobDetails }) {
  const [clicked, setClicked] = useState('allDetails');
  const [notificationData, setNotificationData] = useState(jobDetails ? jobDetails : []);

  function filterNotifications(id) {
    setClicked(id);
    if(id === 'allDetails') {
      setNotificationData(jobDetails);
    }
  }

  return (
    <div className='jobs-section'>
      <div className='job-details'>
        <ul className='filter-options'>
          {detailsFilter?.map((item) => <li key={item.id} className={`${clicked === item.id ? 'active' : ''} ${!item.showInMobile ? 'hide-option' : ''}`} ><button id={item.id} onClick={() => filterNotifications(item.id)}>{item.name}</button></li>)}
        </ul>
        <table>
          <tbody>
            {notificationData?.map((item) => <Jobs key={item} data={item}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

