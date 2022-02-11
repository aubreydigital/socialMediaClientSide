import React, {useState, useEffect, useContext} from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserContext from '../context/UserContext';
import SingleTop from '../components/SingleTop'
const PostsArea = ({ howMany }) => {
const [postId, setPostId] = useState(0);
const [title, setTitle] = useState('');
const [post, setPost] = useState('');
const [likes, setLikes] = useState(0);
const {user, posts, setPosts, getPosts, comments} = useContext(UserContext);
const onLike = async (e) => {
  e.preventDefault();
  setLikes(likes++);
  let updatedUser = { post_id: posts[0].id, title: posts[0].title, post: posts[0].post, likes: likes };
  console.log(updatedUser);
  try {
      await fetch('http://localhost:8888/social_media/server/api/posts/update.php', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedUser)
      });
       
      // getPost();
  } catch (err) {
      console.error('User could not be updated');
  }
  
};

  return <Col lg={6}>
  {howMany === 'top' ? <h2 style={{textShadow: '0 0 10px #fff'}}>Latest Posts</h2> : <h2 style={{textShadow: '0 0 10px #fff'}}>Posts</h2>}
    
    {posts && posts.map((post, i, posts) => {
      if (howMany === 'top') {
        while (i < 3) {
        return <SingleTop i={i} post={post}/>
        }
      } else if (howMany === 'all') {
        return <div className="post pt-5 pb-3 mb-2" key={i}>
        <h3><Link className="text-dark" to={`/posts/${post.post_id}`}>{post.title}</Link></h3>
        <Link to={`/users/profile/${post.user_id}`}><p style={{color: '#fff'}}>{post.user_name}</p></Link>
        <p style={{padding: '0 1em 1em 1em'}}>{post.post}</p>
        <br />
        <button onClick={onLike} className="mx-auto" style={{width: "100px"}}>Like</button>

        <p>{post.likes && post.likes > 0 ? `${post.likes} Likes` : '0 Likes'}</p>
        {comments && comments.map((comment, i) => {
           if (comment.post_id === post.post_id) {
              return (
                <div className="border p-2 rounded">
                <h4>{comment.user_name}</h4>
                <p>{comment.comment}</p>
                </div>
              );
           } else {
             return (
               '0 Comments'
             )}
        })}
        </div>
      }
    })}
      {howMany === 'all' && <Link to={`/feed/`}><p className="text-center my-3">Back to Feed</p></Link>}
    
      </Col>;
};

export default PostsArea;
