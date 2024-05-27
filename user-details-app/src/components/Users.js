'use client';

import { userDetailsStart } from '@/redux/slices/userDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';

import './Users.scss';

export default function Users() {
  const dispatch = useDispatch();
  const { data = {} } = useSelector(({ userDetails }) => userDetails);

  useEffect(() => {
    if(Object.keys(data)?.length === 0) {
      dispatch(userDetailsStart());
    }
  }, []);

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
