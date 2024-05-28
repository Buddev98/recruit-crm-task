'use client';

import { userDetailsStart } from '@/redux/slices/userDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import './Users.scss';

export default function Users() {
  const dispatch = useDispatch();
  const { data = {} } = useSelector(({ userDetails }) => userDetails);
  const path = usePathname();
  
  useEffect(() => {
    if(path === '/') {
      dispatch(userDetailsStart({ type: 'all' }));
    }
  }, [path]);

  return (
    <ul className='users-list'>
      {data?.users?.map((item) => {
        const {
          id = '',
          personalDetails: {
            userName = '',
            position = '',
            state = '',
            city = '',
          } = {},
        } = item;
        return (
          <li key={id}>
            <div>
              <p><label>{userName}</label></p>
              <p>{position}</p>
              <p>
                <span>{state}</span>
                <span>{city}</span>
              </p>
            </div>
            <Link className='view-details' href={`/user-details/${id}`}>View Details</Link>
          </li>
        );
      })}
    </ul>
  );
}
