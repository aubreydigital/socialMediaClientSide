import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {VideoPlayer} from '../components/VideoPlayer'
import UserContext from '../context/UserContext'
const Videos = () => {
  const {videos} = useContext(UserContext);
  return (
    <div className="bg-dark" style={{height: '100%'}}>
  <h2 style={{textShadow: '0 0 10px #fff'}}>vegasMusicSocial</h2>
    {videos && videos.map((video, i, videos) => {
           return <div key={i}>
    <div className="mb-4">
      <VideoPlayer artistName={video.artist_name} fileName={video.file_name} videoName={video.video_name}/>
     
    </div>
    </div>
})}
<div className="bg-dark py-4">
<Link to={`/feed/`}><p className="text-center pt-4 my-auto">Back to Feed</p></Link>
</div></div>
  )
}

export default Videos