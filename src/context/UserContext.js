import {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize'
const UserContext = createContext({});

export const UserProvider = ({ children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  //user state
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    //login state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('transparent');
//post state
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
  //track state
  const [artistName, setArtistName] = useState('')
  const [trackName, setTrackName] = useState('')

    const { width } = useWindowSize();

    let nav = useNavigate();
    const fetchData = async () => {
      const res = await fetch('http://localhost:8888/social_media/server/api/users/');
      const data = res.json();
      return data;
    }
  
    const onLogin = async (e) => {
        e.preventDefault();
        let loginUser = { user_email: email, user_password: password };
        try {
            await fetch('http://localhost:8888/social_media/server/api/users/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginUser)
            }).then(response => {
              users.map(user => {
              if (user.user_email === email && response.status === 200) {
                setColor('green');
              setMessage('Successful login!');
              setUser(user);
              setLoggedIn(true);
                nav(`/feed/`)
              } else {
              setColor('red');
              setMessage('Incorrect username or password');
              }
            })
            })
        } catch (err) {
            console.error('User not logged in.');
  
        }
  
      }

      const [posts, setPosts] = useState([])
    const fetchPostData = async () => {
        const res = await fetch('http://localhost:8888/social_media/server/api/posts/read.php');
        const data = res.json();
        return data;
      }

      const [tracks, setTracks] = useState([])
      const fetchTrackData = async () => {
          const res = await fetch('http://localhost:8888/social_media/server/api/tracks/read.php');
          const data = res.json();
          return data;
        }
    
        const [videos, setVideos] = useState([])
        const fetchVideoData = async () => {
            const res = await fetch('http://localhost:8888/social_media/server/api/videos/read.php');
            const data = res.json();
            return data;
          }
      
    
      const onAddPost = async (e) => {
        e.preventDefault();
        // setUserId(from.id);
        let newPost = { user_id: user.user_id, user_name: user.user_name, title: title, post: post};
        try {
          await fetch('http://localhost:8888/social_media/server/api/posts/create.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newPost)
          });
          nav(`/feed/`);
      } catch (err) {
          console.error('User could not be created');
      }
        console.log(newPost);
        
    }

    const getUsers = async () => {
      const userData = await fetchData();
      setUsers(userData.data);
    }
    const getPosts = async () => {
      const postData = await fetchPostData();
      setPosts(postData.data);
    }
    const getTracks = async () => {
      const trackData = await fetchTrackData();
      setTracks(trackData.data);
    }
    const getVideos = async () => {
      const videoData = await fetchVideoData();
      setVideos(videoData.data);
    }
  
    useEffect(() => {
      const getUsers = async () => {
        const userData = await fetchData();
        setUsers(userData.data);
      }
      const getPosts = async () => {
        const postData = await fetchPostData();
        setPosts(postData.data);
      }
      const getTracks = async () => {
        const trackData = await fetchTrackData();
        setTracks(trackData.data);
      }
  
      getUsers();
      getPosts();
      getTracks();

      }, []);
    return (
        <UserContext.Provider value={{
            width, users, onLogin, message, color, user, setColor, setEmail, email, setPassword, password, posts, setPosts, onAddPost, post, setPost, title, setTitle, tracks, setTracks, getUsers, getPosts, getTracks, setLoggedIn, videos, setVideos, getVideos
        }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;

