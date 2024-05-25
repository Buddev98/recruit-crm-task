import SideNavigationBar from '@/components/SideNavigationBar';
import UserDetails from '@/components/UserDetails';
import Header from '@/components/Header';
import { users, navigationIcons, headerIcons, notificationsIcons, notificationFilters, notifications } from '../../components/NavigationIcons.json';

import './UserDetails.scss';
import Notifications from '@/components/Notifications';

export default function UserDetailsPage() {
  return (
    <div className='user-details-page'>
      <SideNavigationBar navigationIcons={navigationIcons} />
      <div className='main-section'>
        <Header headerIcons={headerIcons} />
        <div className='user-details-notifications'>
          <div className='user-details-section-container'>
            <table>
              <UserDetails user={users[0]} start={1} end={9} />
              <UserDetails user={users[0]} start={9} end={17} />
            </table>            
          </div>
          <Notifications notificationsIcons={notificationsIcons} notificationFilters={notificationFilters} notifications={notifications} />
        </div>
      </div>
    </div>
  )
}

