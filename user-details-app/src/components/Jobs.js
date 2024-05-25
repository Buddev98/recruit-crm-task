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
        <p>{userName}</p>
        <p>{date}</p>
      </td>
      <td>{status}</td>
      <td><button>View Files</button></td>
      <td>
        <Switch />
      </td>
    </tr>
  );
}
