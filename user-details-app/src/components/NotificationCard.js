import Image from 'next/image'

import './NotificationCard.scss';

export default function NotificationCard({ data = {} }) {
  const { content, id, userName, dateTime, association, status } = data;
  let iconName = id === 'Note' ? 'notes-icon' : id === 'Task' ? 'tick-mark' : id === 'Meeting' ? 'calendar-blue' : id === 'Call' ? 'phone-icon' : '';
  return (
    <div className='notification-card'>
      <p>
        {iconName && <Image src={`/images/navigationIcons/${iconName}.svg`} width={10} height={10} alt={`${id}s`} />}
        <label>{id}</label>
        {status && <span className='status'>{status}</span>}
      </p>
      <p>{content}</p>
      <p><label>{association} Association(s)</label></p>
      <p>
        <span className='color-black'><Image src={'/images/navigationIcons/user-name.svg'} width={12} height={12} alt='user' /> {userName}</span>
        <span className='color-black'><Image src={'/images/navigationIcons/clock-grey.svg'} width={14} height={14} alt='clock' /> {dateTime}</span>
      </p>
    </div>
  )
}

