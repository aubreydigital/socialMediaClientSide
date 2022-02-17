import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserArea from '../components/UserArea';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import PostsArea from '../components/PostsArea';
import TracksArea from '../components/TracksArea';
import UserContext from '../context/UserContext';
import VideosArea from '../components/VideosArea';
import NextShow from '../components/NextShow';
const Feed2 = () => {
  const {user, getPosts, getTracks, getVideos, loggedIn} = useContext(UserContext);
const nav = useNavigate();
  useEffect(() => {
    getPosts();
    getTracks();
    getVideos();
  }, [])
  return (
    <>
    <UserArea currentPage="feed" />
  <Container fluid>

{/* <UserArea /> */}
<Row className='flex-row'>
<Col lg={6} className="mt-5">
<NextShow />
</Col>
<Col lg={6} className="mt-5">
<PostsArea howMany="top"/>
</Col>
</Row>
<Row className='flex-row'>
<Col lg={6}>
<TracksArea />
</Col>
<Col lg={6}>
<VideosArea />
</Col>
</Row>
  </Container>
  <Footer currentPage="feed"/>

  </>
  );
};
export default Feed2;
