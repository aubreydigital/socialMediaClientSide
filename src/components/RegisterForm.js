import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
const RegisterForm = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    let nav = useNavigate();
    const onSubmit = async (e) => {
        e.preventDefault();
        let newUser = { user_name: userName, user_email: userEmail, user_password: userPassword };
        console.log(newUser);
        try {
            await fetch('http://localhost:8888/social_media/server/api/users/register.php', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            nav('/login');
        } catch (err) {
            console.error('User could not be created');
        }
        
    }
return <div className="frontPage"><h1>Register</h1><form onSubmit={onSubmit}>
  <label htmlFor="user_name">Username:</label><br/>
  <input type="text" name="user_name" placeholder="Enter a username..." value={userName} onChange={(e) => setUserName(e.target.value)}></input><br />
  <label htmlFor="user_email">Email:</label><br />
  <input type="text" name="user_email" placeholder="Enter your email..." value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input><br/>
  <label htmlFor="user_password">Password:</label><br />
  <input type="password" name="user_password" placeholder="Enter your strong password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input><br/>
  <button type="submit" className="button" name="submit">Submit</button>
</form><br />
<Link to="/login">Already registed? Sign in!</Link></div>;
};

export default RegisterForm;
