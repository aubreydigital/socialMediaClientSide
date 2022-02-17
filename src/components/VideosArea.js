import React, { useContext, useState } from 'react';
import {Carousel} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { VideoPlayer } from './VideoPlayer';
import {Link} from 'react-router-dom'
const VideosArea = () => {
  const [index, setIndex] = useState(0);

  const {videos} = useContext(UserContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<div><h2 style={{textShadow: '0 0 10px #fff'}}>Latest Videos</h2>
  <div className="text-center rounded py-4">
  <Carousel activeIndex={index} onSelect={handleSelect} fade style={{flexDirection: 'row'}}>
    {videos && videos.map((video, i, videos) => {
          while (i < 3) { 
           return <Carousel.Item key={i}>
    <div className="pt-3 mb-3 pb-3">
      <VideoPlayer artistName={videos[i].artist_name} fileName={videos[i].file_name} videoName={videos[i].video_name}/>
     
    </div>
    </Carousel.Item>
          }
})}
    </Carousel>
<Link to={`/tracks`} style={{textShadow: '0 0 10px #000'}}>Browse All Videos</Link>
    </div>
    </div>
    );
};

export default VideosArea;
