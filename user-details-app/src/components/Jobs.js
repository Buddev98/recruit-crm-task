import Image from 'next/image';
import './Jobs.scss';
import Switch from './Switch';

export default function Jobs({ data = {} }) {
  const { name, company, userName, date, status } = data;
  return (
    <tr className="jobs">
      <td>
        <Image
          src={'/images/navigationIcons/M.svg'}
          width={40}
          height={40}
          alt="icon"
        />
        <div>
          <p>{name}</p>
          <p>{company}</p>
        </div>
      </td>
      <td>
        <p><Image src={'/images/navigationIcons/user-name.svg'} width={12} height={12} alt='user' />{userName}</p>
        <p>{date}</p>
      </td>
      <td className='status'>{status}</td>
      <td className='view-details'><button>View Files</button></td>
      <td className='toggle-switch'>
        <Switch />
      </td>
    </tr>
  );
}
