import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
const UpcomingShows = () => {
    const [shows,setShows] = useState([])
   const params = useParams();

    const fetchShowData = async () => {
        const res = await fetch('http://localhost:8888/social_media/server/api/shows/read.php');
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
      {shows && shows.map((show, i) => (
          <>
  <img key={i} style={{maxWidth: '300px', borderRadius: '10px', boxShadow: '0 0 10px #fff', margin: '1em 0'}} src={`http://localhost:8888/social_media/server/uploads/flyers/${show.flyer}`} />
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

export default UpcomingShows;
