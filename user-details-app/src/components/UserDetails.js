'use client';

export default function UserDetails({ user = {}, start, end, className }) {
  let isEditMode = false;
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
                  {isEditMode && user[key]?.isEditable && <input type="text" name={user[key]?.label} value={user[key]?.value} />}
                  {!isEditMode && ((key === 'languageSkills' || key === 'skills') ? user[key]?.value?.join(', ') : user[key]?.value)}
                </td>
              </tr>
            )}
          </>
        );
      })}
    </tbody>
  );
}
