import './App.css';
import Home from './pages/Home';
import {useState, useEffect, useContext} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Register from './pages/Register';
import UserList from './pages/UserList';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
import EditProfile from './pages/EditProfile';
import Feed2 from './pages/Feed2';
import AddPost from './pages/AddPost';
import AddTrack from './pages/AddTrack';
import AddVideo from './pages/AddVideo';
import Message from './pages/Message';
import UpcomingShows from './pages/UpcomingShows';
import UserContext, { UserProvider } from './context/UserContext';
import UserArea from './components/UserArea';
import Footer from './components/Footer';

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
      <Route path="/feed/" element={<Feed2 />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login users={users} />} />
      <Route path="userlist" element={<UserList />} />
      <Route path="/addTrack" element={<AddTrack />} />
      <Route path="/addVideo" element={<AddVideo />} />
      <Route path="/addPost/" element={<AddPost />} />
      <Route path="/message" element={<Message />} />
      <Route path="/upcomingShows/" element={<UpcomingShows />} />
      </Routes>
      <Footer />

      </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
