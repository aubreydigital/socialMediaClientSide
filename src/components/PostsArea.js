import React, {useState, useEffect, useContext} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext';
const PostsArea = () => {
const {posts, setPosts} = useContext(UserContext);
  return <Col lg={6}>
  <h2 style={{textShadow: '0 0 10px #fff'}}>Latest Posts</h2>
  
          {posts && posts.map((post, i) => (
          <div className="post pt-5 pb-3 mb-2" key={i}>
          <h3>{post.title}</h3>
          <Link to={`/users/profile/${post.user_id}`}><p style={{color: '#fff'}}>{post.user_name}</p></Link>
          <p style={{padding: '0 1em 1em 1em'}}>{post.post}</p>
          </div>
          ))}
      </Col>;
};

export default PostsArea;
