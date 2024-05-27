'use client';

import { userDetailsStart } from '@/redux/slices/userDetails';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Users() {
  const dispatch = useDispatch();
  const { data = {} } = useSelector(({ userDetails }) => userDetails);

  useEffect(() => {
    if(Object.keys(data)?.length === 0) {
      dispatch(userDetailsStart());
    }
  }, []);

  return (
    <div>
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
          <li>
            <div>
              <span>{userName}</span>
              <span>{position}</span>
              <span>{state}</span>
              <span>{city}</span>
            </div>
            <Link href={`/user-details/${id}`}>View Details</Link>
          </li>
        );
      })}
    </div>
  );
}
