import React, {useContext, useEffect, useState} from 'react';
import {Navbar, Nav, Container, NavDropdown, Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import {Link} from 'react-router-dom'
const UserArea = ({currentPage}) => {
  const {user, setUser, loggedIn} = useContext(UserContext);

  const clearUser = () => {
    setUser(null);
  }
  return (
<Col lg={12} className="mb-5">
  <Navbar variant="dark" expand="lg" fixed="top" className="pt-3" style={{backgroundColor: '#111'}}>
  <Container>
    <Navbar.Brand href={`/feed/`}>vegasMusicSocial</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      {/* <Link to='/feed'>Feed</Link> */}
        <Link className="mb-2" to={`/users/${user.user_id}`}>Profile</Link>
        <Link className="mb-2" to={`/upcomingShows/`}>Upcoming Shows</Link>
        <NavDropdown title="Add" id="nav-dropdown" className="dropdown-toggle nav-align mb-2">
        <NavDropdown.Item style={{backgroundColor: '#111', paddingTop: '10px'}}><Link to={`/addPost/`}>Post</Link></NavDropdown.Item>
        <NavDropdown.Item style={{backgroundColor: '#111'}}><Link to={`/addTrack/`}>Track</Link></NavDropdown.Item>
        <NavDropdown.Item style={{backgroundColor: '#111'}}><Link to={`/addVideo/`}>Video</Link></NavDropdown.Item>
        </NavDropdown>
        
        <Link className="nav-align" onClick={clearUser} to={`/`}>Sign Out</Link>
  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Col>
  );
};

export default UserArea;
