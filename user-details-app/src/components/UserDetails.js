'use client';

export default function UserDetails({ user, start, end }) {
  let isEditMode = false;
  return (
    <tbody>
      {Object.keys(user)?.slice(start, end)?.map((key) => {
        return (
          <>
            {key !== 'id' && (
              <tr key={key} className='user-details-section'>
                <td>
                  <strong><label>{user[key]?.label}</label></strong>
                </td>
                <td>
                  {isEditMode && <input type="text" name={user[key]?.label} value={user[key]?.value} />}
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
