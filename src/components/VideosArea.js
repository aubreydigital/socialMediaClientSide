import React, { useContext, useState } from 'react';
import {Carousel} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { VideoPlayer } from './VideoPlayer';
const VideosArea = () => {
  const [index, setIndex] = useState(0);

  const {videos} = useContext(UserContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<>
  <h2 style={{textShadow: '0 0 10px #fff'}}>Latest Videos</h2>
  <Carousel activeIndex={index} onSelect={handleSelect} fade style={{flexDirection: 'row'}}>
    {videos && videos.map((video, i, videos) => {
          while (i < 3) { 
           return <Carousel.Item key={i}>
    <div className="mb-4">
      <VideoPlayer artistName={videos[i].artist_name} fileName={videos[i].file_name} videoName={videos[i].video_name}/>
     
    </div>
    </Carousel.Item>
          }
})}
    </Carousel></>
    );
};

export default VideosArea;
