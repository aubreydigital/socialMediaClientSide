import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AddComment from './AddComment';
import UserContext from '../context/UserContext';
const SingleTop = ({i, post}) => {
//     const [postId, setPostId] = useState(0);
// const [title, setTitle] = useState('');
// const [post, setPost] = useState('');
let [likes, setLikes] = useState(post.likes);
let [visible, setVisible] = useState('hidden');
let [margTop, setMargTop] = useState('-240px');
const {user, posts, setPosts, getPosts, comments} = useContext(UserContext);

    const onLike = async (e) => {
        e.preventDefault();
        setLikes(likes++);
        let updatedUser = { post_id: post.post_id, title: post.title, post: post.post, likes: likes };
        console.log(updatedUser);
        try {
            await fetch('http://localhost:8888/social_media/server/api/posts/update.php', {
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
        <h3 className="mb-4"><Link className="rounded text-dark bg-light p-2" to={`/posts/${post.post_id}`}>{post.title}</Link></h3>
        <Link to={`/users/profile/${post.user_id}`}><p className="border rounded p-2" style={{color: '#fff'}}>{post.user_name}</p></Link>
        <p className="bg-light rounded p-1">{post.post}</p>
        <br />
        {/* <button onClick={onLike}>Like</button> */}
        <p>{post.likes > 0 ? `${post.likes} Likes` : '0 Likes'}</p>
    <button onClick={onLike} className="border-none rounded mx-auto" style={{width: "100px"}}>Like</button>

        {comments && comments.map((comment, i) => {
          if (comment.post_id === post.post_id && i === 0) {
             return `${i + 1} Comment`;
          } else if (comment.post_id === post.post_id && i > 0) {
            return `${i + 1} Comments`;
           } else {
             return (<>
                 <p>No comments yet.</p> <button onClick={() => {
                     setVisible('visible')
                     setMargTop('0');
                 }}className="p-2 border-none rounded bg-white">Add One!</button>
                 </>
             )
           }
        })}

        <AddComment visible={visible} margTop={margTop} />
        </div>
  )
}

export default SingleTop