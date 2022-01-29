import {useEffect, useState, useContext} from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import SuccessOrFail from './SuccessOrFail'
import {Link} from 'react-router-dom';
import { UserProvider } from '../context/UserContext';


const LoginForm = () => {
  const { onLogin, email, setEmail, password, setPassword, message, color } = useContext(UserContext);
    
    

    
  return (
  <div className="mainPage">
      <h1>Login</h1><br />
      <form onSubmit={onLogin}>
          <label htmlFor="email">Email:</label><br/>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label htmlFor="password">Password:</label><br/>
      
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button type="submit" className="button" name="submit">Login</button><br />
      <Link to="/register">Not a member? Sign up today!</Link>
<br /><SuccessOrFail message={message} color={color} />
  </form></div>
  );
};

export default LoginForm;
