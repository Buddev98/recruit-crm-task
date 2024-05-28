'use client';

import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStart } from '@/redux/slices/userDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import SideNavigationBar from '@/components/SideNavigationBar';
import UserDetails from '@/components/UserDetails';
import Header from '@/components/Header';
import Notifications from '@/components/Notifications';
import JobDetails from '@/components/JobDetails';
import AccountDetails from '@/components/AccountDetails';
import { navigationIcons, headerIcons, notificationsIcons, notificationFilters, notifications, detailsFilter, jobDetails, btnList, socialMediaIcons } from './NavigationIcons.json';

import './UserDetailsPage.scss';

export default function UserDetailsPage() {
  const dispatch = useDispatch();
  const { userId = '' } = useParams();
  const [editMode, setEditMode] = useState(false);
  const {
    data = {}
  } = useSelector(({ userDetails }) => userDetails);
  const [bodyObj, setBodyObj] = useState(data); 
  
  useEffect(() => {
    if(userId !== '') {
      dispatch(userDetailsStart({ userId }));
    }
  }, [userId]);

  return (
    <div className='user-details-page'>
      <SideNavigationBar navigationIcons={navigationIcons} />
      <div className='main-section'>
        <Header headerIcons={headerIcons} />
        <div className='user-details-notifications'>
          <div className='user-details-section-container'>
            <AccountDetails socialMediaIcons={socialMediaIcons} btnList={btnList} bodyObj={bodyObj} editMode={editMode} setEditMode={setEditMode} />
            <table className='user-details-table'>
              <UserDetails className={'hide-mobile'} editMode={editMode} setBodyObj={setBodyObj} user={data} start={2} end={10} />
              <UserDetails className={'hide-mobile'} editMode={editMode} setBodyObj={setBodyObj} user={data} start={10} end={18} />
              <UserDetails className={'show-in-mobile'} editMode={editMode} setBodyObj={setBodyObj} user={data} start={2} end={18} />
            </table>
            <JobDetails detailsFilter={detailsFilter} jobDetails={jobDetails} />
          </div>
          <Notifications notificationsIcons={notificationsIcons} notificationFilters={notificationFilters} notifications={notifications} />
        </div>
      </div>
    </div>
  )
}

