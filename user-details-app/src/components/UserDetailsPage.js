'use client';

import SideNavigationBar from '@/components/SideNavigationBar';
import UserDetails from '@/components/UserDetails';
import Header from '@/components/Header';
import { users, navigationIcons, headerIcons, notificationsIcons, notificationFilters, notifications, detailsFilter, jobDetails } from './NavigationIcons.json';

import './UserDetailsPage.scss';
import Notifications from '@/components/Notifications';
import JobDetails from '@/components/JobDetails';
import AccountDetails from '@/components/AccountDetails';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStart } from '@/redux/slices/userDetails';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function UserDetailsPage() {
  const dispatch = useDispatch();
  const { userId = '' } = useParams();

  const {
    data = {},
  } = useSelector(({ userDetails }) => userDetails);

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
            <AccountDetails />
            <table className='user-details-table'>
              <UserDetails className={'hide-mobile'} user={data} start={2} end={10} />
              <UserDetails className={'hide-mobile'} user={data} start={10} end={18} />
              <UserDetails className={'show-in-mobile'} user={data} start={2} end={18} />
            </table>
            <JobDetails detailsFilter={detailsFilter} jobDetails={jobDetails} />
          </div>
          <Notifications notificationsIcons={notificationsIcons} notificationFilters={notificationFilters} notifications={notifications} />
        </div>
      </div>
    </div>
  )
}

