import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import {AudioPlayer} from '../components/AudioPlayer';
import PostsArea from '../components/PostsArea';
import NextShow from '../components/NextShow'
const Tracks = () => {
  const {tracks} = useContext(UserContext);

  return (
    <div className="bg-dark px-3">
      <Row className="flex-row"><Col lg={8}>
    <h2 style={{textShadow: '0 0 10px #fff'}}> All Tracks</h2>
    {tracks && tracks.map((track, i, tracks) => {

        return <div className="track my-4" key={i} style={{ backgroundImage: `url(${track.image})`, backgroundSize: '780px', backgroundPosition: 'top center', backgroundBlendMode: 'luminosity', backgroundRepeat: 'no-repeat', height: '600px'}}>
          <h4 className="text-light">{track.artist_name}</h4>
          <AudioPlayer fileName={track.file_name} trackName={track.track_name}/>
        </div>

    })}
    </Col>
    <Col lg={4}>
      <div className="mt-3 d-flex justify-content-center align-items-center text-center">
    <h2 style={{color: '#fff', textShadow: '0 0 10px #fff'}}>vegasMusicSocial</h2>
    </div>
    <div>
    <NextShow />
      <PostsArea howMany="top" />
    </div>
    </Col>
    </Row>
    <Row>
<div className="bg-dark py-4">
<Link to={`/feed/`}><p className="text-center pt-4 my-auto">Back to Feed</p></Link>
</div>
</Row>
    </div>
  )
}

export default Tracks