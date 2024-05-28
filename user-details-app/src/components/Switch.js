'use client';

import { useState } from 'react';
import './Switch.scss';

export default function Switch() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span className="slider round"></span>
    </label>
  )
}

