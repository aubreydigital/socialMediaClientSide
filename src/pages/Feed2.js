import React, { useContext, useEffect } from 'react';
import UserArea from '../components/UserArea';
import { Container, Row } from 'react-bootstrap';
import PostsArea from '../components/PostsArea';
import TracksArea from '../components/TracksArea';
import UserContext from '../context/UserContext';
const Feed2 = () => {
  const {user, getPosts, getTracks, getVideos} = useContext(UserContext);

  useEffect(() => {
    getPosts();
    getTracks();
    getVideos();
  }, [])
  
  return (
  <Container className="bg-dark h-100" fluid>
<Row className='flex-row'>
<UserArea />

    <PostsArea />
<TracksArea />
</Row>
  </Container>
  
  );
};

export default Feed2;
