import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComments from '../components/PostComments'
const SinglePost = () => {
  const [post,setPost] = useState({});
  const [postText, setPostText] = useState('');
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  let [likes, setLikes] = useState(0);


    const params = useParams();
    const fetchPostData = async () => {
        const res = await fetch(`http://localhost:8888/social_media/server/api/posts/single.php?post_id=${params.id}`);
        const data = res.json();
        return data;
      }

      const getPost = async () => {
        const postData = await fetchPostData();
        setPost(postData);
        setPostText(postData.post);
        setUserId(postData.user_id);
        setUserName(postData.user_name);
        setTitle(postData.title);
        setLikes(postData.likes);
      }  
      useEffect(() => {
        const getPost = async () => {
          const postData = await fetchPostData();
          setPost(postData);
          setPostText(postData.post);
          setUserId(postData.user_id);
          setUserName(postData.user_name);
          setTitle(postData.title);
          setLikes(postData.likes);
        }   

        getPost();
        
      }, []);
      const onLike = async (e) => {
        e.preventDefault();
        setLikes(likes++);
        let updatedUser = { post_id: params.id, title: title, post: postText, likes: likes };
        console.log(updatedUser);
        try {
            await fetch('http://localhost:8888/social_media/server/api/posts/update.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });
             
            getPost();
        } catch (err) {
            console.error('User could not be updated');
        }
        
    };
  return (
  <div style={{height: '100vh', justifyContent: 'center'}} className="d-flex flex-column text-light text-center">
    <h1>{post.title}</h1>
    <h3>{post.user_name}</h3>
    <p>{post.post}</p>
    <p>{post.likes} likes</p>
    <button onClick={onLike} className="mx-auto" style={{width: "100px"}}>Like</button>
<hr />
  <PostComments post_id={params.id}/>
  </div>
  );
};

export default SinglePost;
