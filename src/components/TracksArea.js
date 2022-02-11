import React, { useContext } from 'react';
import {Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import {AudioPlayer} from '../components/AudioPlayer'

const TracksArea = () => {
  const {tracks} = useContext(UserContext);
  return (
    <Col lg={6}>
    <h2 style={{textShadow: '0 0 10px #fff'}}> Latest Tracks</h2>
    {tracks && tracks.map((track, i, tracks) => {
      while (i < 3) {
        return <div className="track mb-4" key={i} style={{ backgroundImage: `url(${track.image})`, backgroundSize: '780px', backgroundPosition: 'top center', backgroundBlendMode: 'luminosity', backgroundRepeat: 'no-repeat'}}>
          <AudioPlayer fileName={track.file_name} trackName={track.track_name}/>
          <h3>{track.artist_name}</h3>
        </div>
      }
    })}
    </Col>
    );
};

export default TracksArea;
