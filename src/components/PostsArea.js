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

  return <>
  <h2 style={{textShadow: '0 0 10px #fff'}}>Latest Post</h2>
    
    {posts && posts.map((post, i, posts) => {
      if (howMany === 'top') {
        while (i < 3) {
        return <><SingleTop key={i} i={i} post={post}/>
        <div className="text-center">
<Link to={`/posts`}>Browse All Posts</Link>
</div></>
        }
      } else if (howMany === 'all') {
        return <div className="px-3" style={{height: '100vh', width: '100vw'}}><div className="pt-5 pb-3 mb-2" key={i}>
        <h3><Link className="text-light" to={`/posts/${post.post_id}`}>{post.title}</Link></h3>
        <Link to={`/users/profile/${post.user_id}`}><p style={{color: '#fff'}}>{post.user_name}</p></Link>
        <p className="text-white" style={{padding: '0 1em 1em 1em'}}>{post.post}</p>
        <br />
        <button onClick={async (e) => {
  e.preventDefault();
  setLikes(post.likes++);
  let updatedUser = { post_id: post.id, title: post.title, post: post.post, likes: likes };
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
       
      // getPost();
  } catch (err) {
      console.error('User could not be updated');
  }
  
}} className="mx-auto" style={{width: "100px"}}>Like</button>

        <p>{post.likes && post.likes > 0 ? `${post.likes} Likes` : '0 Likes'}</p>
        {comments && comments.map((comment, i) => {
           if (comment.post_id === post.post_id) {
              return (
                <div className="p-3 rounded" style={{backgroundColor: '#ddd'}}>
                <h4>{comment.user_name}</h4>
                <p>{comment.comment}</p>
                </div>
              );
           }
          //  else {
          //    return (
          //      '0 Comments'
          //    )}
        })}
        </div></div>
      }
    })}
      {howMany === 'all' && <Link to={`/feed/`}><p className="text-center my-3">Back to Feed</p></Link>}
    
      </>;
};

export default PostsArea;
