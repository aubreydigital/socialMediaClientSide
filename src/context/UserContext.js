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
    const [postDate, setPostDate] = useState('');
  //track state
  const [artistName, setArtistName] = useState('')
  const [trackName, setTrackName] = useState('')
  // const WEB_API = 'https://aubrey.digital/vms_server/server';
  // const WEB_API = 'http://localhost:8888/social_media/server';
    const { width } = useWindowSize();

    let nav = useNavigate();
    const fetchData = async () => {
      const res = await fetch('http://localhost:8888/social_media/server/api/users/');
      // const res = await fetch('https://aubrey.digital/vms_server/server/api/users/');
      const data = res.json();
      return data;
    }

  const onLike = async (e) => {
      e.preventDefault();
      let updatedUser = { post_id: post.post_id, title: post.title, post: post.post, likes: post.likes };
      console.log(updatedUser);
      try {
          await fetch('http://localhost:8888/social_media/server/api/posts/update.php', {
            // await fetch('https://aubrey.digital/vms_server/server/api/posts/update.php', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedUser)
          });
           
          getPosts();
      } catch (err) {
          console.error('User could not be updated');
      }
      
    };

    const onLogin = async (e) => {
        e.preventDefault();
        let loginUser = { user_email: email, user_password: password };
        try {
            await fetch('http://localhost:8888/social_media/server/api/users/login.php', {
              // await fetch('https://aubrey.digital/vms_server/server/api/users/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginUser)
            }).then(response => {
              users.map(user => {
              if (user.user_email === email && response.status === 200) {
                setColor('green');
              setMessage('Successful login!');
              setUser(user);
              setLoggedIn(true);
                  nav(`/feed/`);
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
        // const res = await fetch('https://aubrey.digital/vms_server/server/api/posts/read.php');
        const data = res.json();
        return data;
      }

      const [tracks, setTracks] = useState([])
      const fetchTrackData = async () => {
          const res = await fetch('http://localhost:8888/social_media/server/api/tracks/read.php');
          // const res = await fetch('https://aubrey.digital/vms_server/server/api/tracks/read.php');
          const data = res.json();
          return data;
        }
    
        const [videos, setVideos] = useState([])
        const fetchVideoData = async () => {
            const res = await fetch('http://localhost:8888/social_media/server/api/videos/read.php');
            // const res = await fetch('https://aubrey.digital/vms_server/server/api/videos/read.php');
            const data = res.json();
            return data;
          }

        const [comments, setComments] = useState([])
        const fetchCommentData = async () => {
            const res = await fetch('http://localhost:8888/social_media/server/api/comments/read.php');
            // const res = await fetch('https://aubrey.digital/vms_server/server/api/comments/read.php');
            const data = res.json();
            return data;
          }
    
      const onAddPost = async (e) => {
        e.preventDefault();
        // setUserId(from.id);
        
        console.log(postDate)
        let newPost = { user_id: user.user_id, user_name: user.user_name, title: title, post: post, created_at: postDate};
        try {
          await fetch('http://localhost:8888/social_media/server/api/posts/create.php', {
            // await fetch('https://aubrey.digital/vms_server/server/api/posts/create.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newPost)
          });
          nav(`/feed/`);
          getPosts();
      } catch (err) {
          console.error('User could not be created');
      }
        console.log(newPost);
        
    }

    const getUsers = async () => {
      const userData = await fetchData();
      setUsers(userData.data);
    }

    const getTracks = async () => {
      const trackData = await fetchTrackData();
      setTracks(trackData.data);
    }
    const getVideos = async () => {
      const videoData = await fetchVideoData();
      setVideos(videoData.data);
    }
    const getComments = async () => {
      const commentData = await fetchCommentData();
      setComments(commentData.data);
    }

    const getPosts = async () => {
      const postData = await fetchPostData();
      setPosts(postData.data);
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

      const getComments = async () => {
        const commentData = await fetchCommentData();
        setComments(commentData.data);
      }
  
      getUsers();
      getPosts();
      getTracks();
      getComments();

      }, []);
    return (
        <UserContext.Provider value={{
            width, users, onLogin, message, color, user, setColor, setEmail, email, setPassword, password, posts, setPosts, onAddPost, post, setPost, title, setTitle, tracks, setTracks, getUsers, getPosts, getTracks, setLoggedIn, videos, setVideos, getVideos, comments, setComments, getComments, onLike
        }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContext;

