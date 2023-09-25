import React, { useState } from 'react';

export default function UserData() {
  const [userDataList, setUserDataList] = useState([]);

  function getUsers() {
    fetch(`https://localhost:7260/get`)
      .then(res => res.json())
      .then(data => setUserDataList(data))
      .catch(error => console.error(error));
  }

  return (
    <>
      <div className='user-data-label'>
        <div className='user-id'>ID</div>
        <div className='user-name'>Username</div>
        <div className='user-role'>Role</div>
      </div>
      <div>
          {userDataList.map((userData, index) => (
            <div key={index}  className='user-data-div'>
                <div className='user-id'>{userData.id}</div>
                <div className='user-name'>{userData.username}</div>
                <div className='user-role'>{userData.role}</div>
            </div>
          ))}
      </div>
      <div className='center-margin'>
        <button className="style-button" onClick={getUsers}>Get Users</button>
      </div>
    </>
  );
}
