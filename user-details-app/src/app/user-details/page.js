import SideNavigationBar from '@/components/SideNavigationBar';
import UserDetails from '@/components/UserDetails';
import Header from '@/components/Header';
import { users, navigationIcons, headerIcons, notificationsIcons, notificationFilters, notifications, detailsFilter, jobDetails } from '../../components/NavigationIcons.json';

import './UserDetails.scss';
import Notifications from '@/components/Notifications';
import JobDetails from '@/components/JobDetails';
import AccountDetails from '@/components/AccountDetails';

export default function UserDetailsPage() {
  return (
    <div className='user-details-page'>
      <SideNavigationBar navigationIcons={navigationIcons} />
      <div className='main-section'>
        <Header headerIcons={headerIcons} />
        <div className='user-details-notifications'>
          <div className='user-details-section-container'>
            <AccountDetails />
            <table className='user-details-table'>
              <UserDetails className={'hide-mobile'} user={users[0]} start={2} end={10} />
              <UserDetails className={'hide-mobile'} user={users[0]} start={10} end={18} />
              <UserDetails className={'show-in-mobile'} user={users[0]} start={2} end={18} />
            </table>
            <JobDetails detailsFilter={detailsFilter} jobDetails={jobDetails} />
          </div>
          <Notifications notificationsIcons={notificationsIcons} notificationFilters={notificationFilters} notifications={notifications} />
        </div>
      </div>
    </div>
  )
}

