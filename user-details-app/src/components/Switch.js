'use client';

import { useState } from 'react';
import './Switch.scss';

export default function Switch() {
  const [checked, setChecked] = useState(false);
  return (
    <label class="switch">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <span class="slider round"></span>
    </label>
  )
}

