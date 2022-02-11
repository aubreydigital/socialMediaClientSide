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
      <Route path="/" element={<Home />} />
      <Route path="/users/:id" element={<Profile />} />
      <Route path="/users/profile/:id" element={<PublicProfile />} />
      <Route path="/users/:id/edit" element={<EditProfile />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/tracks' element={<Tracks />} />
      <Route path='/videos' element={<Videos />} />
      <Route path="/feed/" element={<Feed2 />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login users={users} />} />
      <Route path="/addTrack" element={<AddTrack />} />
      <Route path="/addVideo" element={<AddVideo />} />
      <Route path="/addPost/" element={<AddPost />} />
      <Route path="/message" element={<Message />} />
      <Route path="/upcomingShows/" element={<UpcomingShows />} />
      </Routes>

      </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
