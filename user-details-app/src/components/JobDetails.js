'use client';

import { useState } from 'react';

import './JobDetails.scss';
import Jobs from './Jobs';
import { useSelector } from 'react-redux';


export default function JobDetails({ detailsFilter, jobDetails }) {
  const [clicked, setClicked] = useState('allDetails');
  const [notificationData, setNotificationData] = useState(jobDetails ? jobDetails : []);

  const {
    data: { personalDetails: { 
      userName = '',
    } = {} } = {},
  } = useSelector(({ userDetails }) => userDetails);

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
          {detailsFilter?.map((item) => <li key={item.id} className={`${clicked === item.id ? 'active' : ''} ${!item.showInMobile ? 'hide-option' : ''}`} ><button id={item.id} onClick={() => filterNotifications(item.id)}><label>{item.name}</label></button></li>)}
        </ul>
        <div className='action-section'>
          <label>{`Assigned Job to ${userName}`}</label>
          <div>
            <button className='active'><label>Assign To Job</label></button>
            <button><label>View All Assigned Jobs</label></button>
          </div>
        </div>
        <table>
          <tbody>
            {notificationData?.map((item) => <Jobs key={item} data={item}/>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

