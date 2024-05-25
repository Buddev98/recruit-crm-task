import Image from 'next/image'

import './NotificationCard.scss';

export default function NotificationCard({ data = {} }) {
  const { content, id, userName, dateTime, association, status } = data;
  let iconName = id === 'Note' ? 'notes-icon' : id === 'Task' ? 'tick-mark' : id === 'Meeting' ? 'calendar-blue' : id === 'Call' ? 'phone-icon' : '';
  return (
    <div className='notification-card'>
      <p>
        {iconName && <Image src={`/images/navigationIcons/${iconName}.svg`} width={10} height={10} alt={`${id}s`} />}
        <span>{id}</span>
        {status && <span>{status}</span>}
      </p>
      <p>{content}</p>
      <p>{association} Association(s)</p>
      <p><span><Image src={'/images/navigationIcons/user-name.svg'} width={12} height={12} />{userName}</span><span>{dateTime}</span></p>
    </div>
  )
}

