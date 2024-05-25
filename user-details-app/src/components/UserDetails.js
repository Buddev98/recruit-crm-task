import './UserDetails.scss';

export default function UserDetails({ user }) {
  let isEditMode = false;
  return (
    <div className='user-details-section'>
      <ul className='user-details'>
        {Object.keys(user)?.slice(1, 9)?.map((key) => {
          console.log(typeof(user[key]));
          return (
            <>
              {key !== 'id' && (
                <li key={key}>
                  <strong><label>{key}</label></strong>
                  {isEditMode && <input type="text" name={user[key]} />}
                  {!isEditMode && user[key]}
                </li>
              )}
            </>
          );
        })}
      </ul>
      <ul className='user-details'>
        {Object.keys(user)?.slice(9, 17)?.map((key) => {
          console.log(typeof(user[key]));
          return (
            <>
              {key !== 'id' && (
                <li key={key}>
                  <strong><label>{key}</label></strong>
                  {isEditMode && <input type="text" name={user[key]} />}
                  {!isEditMode && user[key]}
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
    
  );
}
