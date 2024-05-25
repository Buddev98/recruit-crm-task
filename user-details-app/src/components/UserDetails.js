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
                  <strong><label>{key}</label></strong>
                </td>
                <td>
                  {isEditMode && <input type="text" name={user[key]} value={user[key]} />}
                  {!isEditMode && ((key === 'languageSkills' || key === 'skills') ? user[key]?.join(', ') : user[key])}
                </td>
              </tr>
            )}
          </>
        );
      })}
    </tbody>
  );
}
