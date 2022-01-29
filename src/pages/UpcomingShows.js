import React from 'react';
import {Link, useParams} from 'react-router-dom'
const UpcomingShows = () => {
   const params = useParams();
  return <div className='frontPage bg-dark'>
      <h1>Upcoming Shows</h1>
  <img style={{maxWidth: '300px', borderRadius: '10px', boxShadow: '0 0 10px #fff', margin: '1em 0'}} src="../../images/flyer.JPG" />
      <Link to={`/feed/`}>Back to Feed</Link>
  </div>;
};

export default UpcomingShows;
