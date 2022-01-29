import React, { useContext } from 'react';
import {Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { VideoPlayer } from './VideoPlayer';
const VideosArea = () => {
  const {videos} = useContext(UserContext);
  return (
    <Col lg={12}>
    <h2 style={{textShadow: '0 0 10px #fff'}}> Latest Videos</h2>
    {videos.map((video, i) => (
    <div className="video mb-4" key={i}>
      <VideoPlayer fileName={video.file_name} videoName={video.video_name}/>
      {/* <h1>{video.video_name}</h1> */}
      <h4>{video.artist_name}</h4>
    </div>
    ))}
    </Col>
    );
};

export default VideosArea;
