'use client';

import { useState } from "react";

export default function UserDetails({ user = {}, start, end, className, editMode = false, setBodyObj = () => {} }) {
  const [changedInput, setChangedInput] = useState('');
  const [value, setValue] = useState('')

  function handleChange(e, labelText) {
    setChangedInput(e.target.id);
    setValue(e.target.value);
    setBodyObj((state) => {
      const newObject = {...state.objects};
      newObject[`${e.target.id}`] = { label: labelText,  value: e.target.value, isEditable: true }
      return {objects: newObject }
    });
  }
  
  return (
    <tbody className={className}>
      {Object.keys(user)?.slice(start, end)?.map((key) => {
        return (
          <>
            {(key !== 'id' || key !== 'personalDetails') && (
              <tr key={key} className='user-details-section'>
                <td>
                  <strong><label>{user[key]?.label}</label></strong>
                </td>
                <td>
                  {editMode && user[key]?.isEditable && <input type="text" id={key} onChange={(e) => handleChange(e, user[key]?.label)} name={user[key]?.label} value={changedInput === key ? value : user[key]?.value} />}
                  {(!user[key]?.isEditable || !editMode) && ((key === 'languageSkills' || key === 'skills') ? user[key]?.value?.join(', ') : user[key]?.value)}
                </td>
              </tr>
            )}
          </>
        );
      })}
    </tbody>
  );
}
