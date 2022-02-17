import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AddComment from './AddComment';
import UserContext from '../context/UserContext';
import PostComments from './PostComments';
const SingleTop = ({i, post}) => {
//     const [postId, setPostId] = useState(0);
// const [title, setTitle] = useState('');
// const [post, setPost] = useState('');
let [likes, setLikes] = useState(post.likes);
let [visible, setVisible] = useState('hidden');
let [margTop, setMargTop] = useState('-240px');
let [postComs, setPostComs] = useState(0);
const {user, posts, setPosts, getPosts, comments} = useContext(UserContext);

    const onLike = async (e) => {
        e.preventDefault();
        setLikes(Number(likes + 1));
        let updatedUser = { post_id: post.post_id, title: post.title, post: post.post, likes: Number(likes) };
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
  return (
    <div className="post pt-5 pb-3 mb-2" key={i}>
        <div className="d-flex text-center justify-content-center align-items-center" style={{height: '50px'}}><h2><Link to={`/posts/${post.post_id}`} className="text-white">{post.title}</Link></h2></div>
        <Link to={`/users/profile/${post.user_id}`}><h4 style={{fontFamily: 'serif', padding: '0.5em .5em .5em .5em', color: '#fff'}}>{post.user_name}</h4></Link>
        <div className="text-white" style={{fontSize: '.7em' }}><p>{post.created_at}</p></div>
        <div><p  className="p-2 text-white" style={{fontSize: '1.5em', fontWeight: '300'}}>{post.post}</p></div><br />
        <p className="text-white">{post.likes > 0 ? `${post.likes} Likes` : '0 Likes'}</p>
    <div><button onClick={onLike} className="rounded mx-3 py-2 mb-5" style={{border: 'none', width: "60px"}}>Like</button>
    <button className="rounded py-2 mb-5" style={{border: 'none', width: "100px"}}>Comment</button><hr />
    {comments && comments.map((comment, i) => {
           if (comment.post_id === post.post_id) {
              return (
                <div className="border p-2 rounded" style={{backgroundColor: 'rgba(250,250,250, 0.2)'}}>
                <h4 className="text-white">{comment.user_name}</h4>
                <p className="text-white">{comment.comment}</p>
                </div>
              );
           }
          //  else {
          //    return (
          //      '0 Comments'
          //    )}
        })}
    </div>
    <PostComments post_id={post.post_id}/>


        <AddComment postId={post.post_id} visible={visible} margTop={margTop} />
        </div>
  )
}

export default SingleTop