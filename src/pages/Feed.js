import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../posts';
import {tracks} from '../tracks';
import { useParams } from 'react-router-dom';
import UserArea from '../components/UserArea';

const Feed = ({user}) => {
  let params = useParams();
  return <div className="feed">
      <div className="row" style={{marginLeft: '1em'}}>
<UserArea params={params}/>
</div>
<div className="row">
<h2>Latest Posts</h2>
{posts.map((post, i) => (
<div className="post" key={i}>
  <h1>{post.subject}</h1>
  <Link to={`/users/profile/${post.user_id}`}><h3>{post.user_name}</h3></Link>
  <p>{post.message}</p>
</div>
))}
</div>
<div className="row">
<h2>
    Latest Tracks
</h2>
{tracks.map((track, i) => (
<div className="track" key={i}>
  <h1>{track.trackName}</h1>
  <h3>{track.artist}</h3>
  <p>{track.album}</p>
</div>
))}
</div>
  </div>;
};

export default Feed;
