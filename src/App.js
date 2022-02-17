import './App.css';
import Home from './pages/Home';
import {useState, useEffect, useContext} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
import EditProfile from './pages/EditProfile';
import SinglePost from './pages/SinglePost'
import Feed2 from './pages/Feed2';
import AddPost from './pages/AddPost';
import AddTrack from './pages/AddTrack';
import AddVideo from './pages/AddVideo';
import Message from './pages/Message';
import UpcomingShows from './pages/UpcomingShows';
import Posts from './pages/Posts';
import Tracks from './pages/Tracks';
import Videos from './pages/Videos';
import UserContext, { UserProvider } from './context/UserContext';


function App() {
const { users } = useContext(UserContext);

  return (
      <BrowserRouter>
      <div className="bg-dark">
        <UserProvider>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users/:id" element={<Profile />} />
      <Route exact path="/users/profile/:id" element={<PublicProfile />} />
      <Route exact path="/users/:id/edit" element={<EditProfile />} />
      <Route exact path="/posts/:id" element={<SinglePost />} />
      <Route exact path='/posts' element={<Posts />} />
      <Route exact path='/tracks' element={<Tracks />} />
      <Route exact path='/videos' element={<Videos />} />
      <Route exact path="/feed/" element={<Feed2 />} />
      <Route exact path="register" element={<Register />} />
      <Route exact path="login" element={<Login users={users} />} />
      <Route exact path="/addTrack" element={<AddTrack />} />
      <Route exact path="/addVideo" element={<AddVideo />} />
      <Route exact path="/addPost/" element={<AddPost />} />
      <Route exact path="/message" element={<Message />} />
      <Route exact path="/upcomingShows/" element={<UpcomingShows />} />
      </Routes>

      </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
