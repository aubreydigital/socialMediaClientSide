import {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaSoundcloud, FaTwitch} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr';
import {FiInstagram} from 'react-icons/fi';
import UserContext from '../context/UserContext';

const Profile = () => {
  const {user} = useContext(UserContext);
 
  return <div className="frontPage">
    <h1>Profile</h1><br />
    <ul>
      <li>
      <h3>Username</h3></li>
      <li>
          {user.user_name}
          </li>
        <br />
        <li><h3>Preferred Name:</h3></li>
        <li>
          {user.full_name !== null ? user.full_name : <br />}
          </li>
          <br />
          <li><h3>Preferred Pronouns:</h3></li>
        <li>
          {user.pronouns !== null ? user.pronouns : <br />}
          </li>
          <br />
        <li><h3>Artist Name:</h3></li>
        <li>
          {user.artist_name ? user.artist_name : <br />}
          </li><br />
        <li><h3>Email:</h3></li>
        <li>{user.user_email}</li><br />
        
        <li><h3>Phone Number:</h3></li>
        
        <li>{user.phone_number ? user.phone_number : <br />}</li><br />
        
        <li><h3>Website:</h3></li>
        <li>{user.website ? <a href={`https://${user.website}`} target="_blank" rel="noreferrer">https://{user.website}</a> : <br />}</li>
      <li><br />
      <div style={{fontSize: '1.8em'}}>
 <a style={{padding: '0 .5em'}} href={`https://www.soundcloud.com/${user.soundcloud}`} target="_blank" rel="noreferrer"><FaSoundcloud /></a> <a style={{padding: '0 .5em'}} href={`https://www.twitter/${user.twitter}`} target="_blank" rel="noreferrer"><GrTwitter /></a> <a style={{padding: '0 .5em'}} href={`https://www.instagram.com/${user.instagram}`} target="_blank" rel="noreferrer"><FiInstagram /></a> <a style={{padding: '0 .5em'}} href={`https://www.twitch.tv/${user.twitch}`} target="_blank" rel="noreferrer"><FaTwitch /></a>
 </div>
      </li>
      
    </ul>
    <br />
    <hr />
    <Link to={`/users/${user.user_id}/edit`}>Edit Profile</Link>
    <Link to={`/feed/`}>Go to Feed</Link>
    <Link to={`/`}>Logout</Link>
    </div>;
};

export default Profile;
