import React, {useEffect, useState, useContext} from 'react';
import UserContext from '../context/UserContext';
import {Link, useParams} from 'react-router-dom'
const ShowsArea = () => {
    const [shows,setShows] = useState([])
    const {WEB_API} = useContext(UserContext);
   const params = useParams();

    const fetchShowData = async () => {
        const res = await fetch(`${WEB_API}/api/shows/read.php`);
        const data = res.json();
        return data;
      }

      useEffect(() => {
        const getShows = async () => {
          const showData = await fetchShowData();
          setShows(showData.data);
        }
        
        getShows()
    }, []);

  return <div className='frontPage bg-dark'>
      <h1>Upcoming Shows</h1>
      {shows && shows.map(show => (
          <>
  <img style={{maxWidth: '300px', borderRadius: '10px', boxShadow: '0 0 10px #fff', margin: '1em 0'}} src={`${WEB_API}/uploads/flyers/${show.flyer}`} />
  <ul>
      <li>Artists: {show.artists}</li>
      <li>Venue: {show.venue}</li>
      <li>Address: {show.address}</li>
      <li>Date: {show.date}</li>
      <li>Presale: ${show.presaleCost}</li>
      <li>Day of Show: ${show.cost}</li>
      <li>{show.over21 ? 'Over 21' : 'All Ages'}</li>
  </ul>
      <Link to={`/feed/`}>Back to Feed</Link>
      </>
      ))}
  </div>;
};

export default ShowsArea;
