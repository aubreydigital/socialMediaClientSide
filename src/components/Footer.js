import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import UserContext from '../context/UserContext'
const Footer = ({ currentPage }) => {
  const {user} = useContext(UserContext);
  return <div className="footer">
    <div className="siteNav">
      <Link to='/posts'>Posts</Link><br />
      <Link to='/tracks'>Tracks</Link><br />
      <Link to='/videos'>Videos</Link><br />
      <Link to='/upcomingShows'>Shows</Link><br />
      </div>    
    <div className="userNav">
    {currentPage === "feed" ? <p className="active">Feed</p> : <Link to='/feed'>Feed</Link>}<br />
    <Link to={`/users/${user.user_id}`}>Profile</Link><br />
    <Link to="/">Sign Out</Link><br />
    </div>
    <div className="copyright">
    <h2 style={{fontSize: '1em', color: '#333'}}>&copy; 2022 <Link to="/">vegasMusicSocial</Link></h2>
    </div>
    </div>;
};

export default Footer;
