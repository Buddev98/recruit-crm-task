import SideNavigationBar from '@/components/SideNavigationBar';
import UserDetails from '@/components/UserDetails';
import Header from '@/components/Header';
import { users, navigationIcons, headerIcons } from '../../components/NavigationIcons.json';

import './UserDetails.scss';
import Notifications from '@/components/Notifications';

export default function UserDetailsPage() {
  return (
    <div className='user-details-page'>
      <SideNavigationBar navigationIcons={navigationIcons} />
      <div className='main-section'>
        <Header headerIcons={headerIcons} />
        <div className='user-details-notifications'>
          <UserDetails user={users[0]} />
          <Notifications />
        </div>
      </div>
    </div>
  )
}

