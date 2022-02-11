import React, { useContext, useEffect } from 'react';
import UserArea from '../components/UserArea';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import PostsArea from '../components/PostsArea';
import TracksArea from '../components/TracksArea';
import UserContext from '../context/UserContext';
import VideosArea from '../components/VideosArea';
const Feed2 = () => {
  const {user, getPosts, getTracks, getVideos} = useContext(UserContext);

  useEffect(() => {
    getPosts();
    getTracks();
    getVideos();
  }, [])
  
  return (
    <>
    <UserArea currentPage="feed" />
  <Container className="px-4" fluid>

{/* <UserArea /> */}
<VideosArea />
<Row className='flex-row'>
<TracksArea />
    <PostsArea howMany="top"/>
</Row>
  </Container>
  <Footer currentPage="feed"/>

  </>
  );
};

export default Feed2;
