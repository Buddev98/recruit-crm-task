'use client';

import { useState } from 'react';
import './LoginForm.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { loginStart } from '@/redux/slices/login';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistrationFrom, setShowRegistrationFrom] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });



  function handleLoginClick() {
    if(!email && !password) {
      setError({ email: 'Please provide a valid email', password: '' });
    } else if(!email) {
      setError({ email: 'Please provide a valid email', password: '' });
    } else if(!password) {
      setError({ email: '', password: 'Please provide password to login' });
    } else {
      console.log(email, password);
      const body = { email, password }
      dispatch(loginStart(body));
      // router.push('/user-details');
    }
  }

  function handleRegistation() {
    if(!email && !password) {
      setError({ email: 'Please provide a valid email', password: '' });
    }else if(!email) {
      setError({ email: 'Please provide a valid email', password: '' });
    } else if(!password) {
      setError({ email: '', password: 'Please provide password' });
    } else {
      console.log(email, password);
      router.push('/login');
      setShowRegistrationFrom(false);
    }
  }

  return (
    <div className='login-wrapper'>
      <Image src={'/images/svg/RCRM-Logo-Watermark.svg'} width={160} height={35} alt='RCRM-Logo' />
      <p>Start your development journey</p>
      <div className='login-form'>
        <input className='email-input' value={email} type='email' name='email' required onChange={(e) => { setEmail(e.target.value); setError({ email: '', password: '' }); }} /> 
        {error?.email && <p className='error'>{error?.email}</p>}
        <input className='password-input' value={password} type='text' name='password' required onChange={(e) => { setPassword(e.target.value); setError({ email: '', password: '' })}} />
        {error?.password && <p className='error'>{error?.password}</p>}
        <button className='login-btn' onClick={showRegistrationFrom ? handleRegistation : handleLoginClick}>{showRegistrationFrom ? 'Register' : 'Login'}</button>
        {!showRegistrationFrom && <p>Don't have an account. <Link href={''} onClick={() => setShowRegistrationFrom(true)}>Register Here</Link></p>}
      </div>
    </div>
  )
}

