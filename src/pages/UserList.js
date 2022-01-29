import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
const UserList = () => {
    const {users, deleteUser } = useContext(GlobalContext);

    console.log(users);
  return <div>
      <h3>Users</h3>
      <ul>
          {users.map(user => (
              <li key={user.user_id}>{user.user_name}
              <p>{user.user_email}</p><br />
              <button onClick={() => deleteUser(user.user_id)} type="button" style={{marginBottom: '1em'}}>Delete User</button></li>
          ))}
      </ul>
  </div>;
};

export default UserList;
