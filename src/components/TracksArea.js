import React, { useContext } from 'react';
import {Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import {AudioPlayer} from '../components/AudioPlayer'
import { Link } from 'react-router-dom'

const TracksArea = () => {
  const {tracks} = useContext(UserContext);
  return (<>
    <h2 style={{textShadow: '0 0 10px #fff'}}> Latest Tracks</h2>

    {tracks && tracks.map((track, i, tracks) => {
      while (i < 3) {
        return <div className="track pt-3 mb-4" key={i} style={{ backgroundImage: `url(${track.image})`, backgroundSize: '400px', backgroundPosition: 'top center', backgroundBlendMode: 'luminosity', backgroundRepeat: 'no-repeat', height: '400px'}}>

          <h3>{track.artist_name}</h3>
          <AudioPlayer fileName={track.file_name} trackName={track.track_name}/>
        </div>
      }
    })}
<div className="text-center">
<Link to={`/tracks`}>Browse All Tracks</Link>
</div></>
    );
};

export default TracksArea;
