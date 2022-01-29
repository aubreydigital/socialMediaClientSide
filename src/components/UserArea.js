import React, {useContext} from 'react';
import {Navbar, Nav, Container, NavDropdown, Col} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import {Link} from 'react-router-dom'
const UserArea = () => {
  const {user, setUser} = useContext(UserContext);

  const clearUser = () => {
    setUser(null);
  }
  return (
<Col lg={12}>
  <Navbar bg="dark" variant="dark" expand="lg" className="mt-3">
  <Container>
    <Navbar.Brand href={`/feed/`}>vegasMusicSocial</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <NavDropdown title="Add" id="navScrollingDropdown">
        <Link to={`/addPost/`} style={{padding: '0 1em'}}>Add Post</Link><br />
        <Link to={`/addTrack/`} style={{padding: '0 1em'}}>Add Track</Link><br />
        </NavDropdown>
        <Link to={`/users/${user.user_id}`} style={{padding: '0 1em'}}>Profile</Link>
        <Link to={`/upcomingShows/`} style={{padding: '0 1em'}}>Upcoming Shows</Link>

        
        <Link onClick={clearUser} to={`/`}  style={{padding: '0 1em'}}>Sign Out</Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Col>
  );
};

export default UserArea;
