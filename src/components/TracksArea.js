import React, { useContext } from 'react';
import {Col} from 'react-bootstrap';
import { Context } from 'react';
import UserContext from '../context/UserContext';
import {AudioPlayer} from '../components/AudioPlayer'

const TracksArea = () => {
  const {tracks} = useContext(UserContext);
  return (
    <Col lg={6}>
    <h2 style={{textShadow: '0 0 10px #fff'}}> Latest Tracks</h2>
    {tracks.map((track, i) => (
    <div className="track mb-4" key={i}>
      <AudioPlayer fileName={track.file_name} trackName={track.track_name}/>
      {/* <h1>{track.track_name}</h1> */}
      <h3>{track.artist_name}</h3>
    </div>
    ))}
    </Col>
    );
};

export default TracksArea;
