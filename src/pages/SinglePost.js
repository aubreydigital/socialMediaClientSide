import PostComments from "../components/PostComments"
import {useState, useEffect} from 'react';
const SinglePost = ({ i, post}) => {
  const [comments, setComments] = useState([]);

  const fetchCommentData = async () => {
  const res = await fetch(`http://localhost:8888/social_media/server/api/comments/read.php`);
      // const res = await fetch(`https://aubrey.digital/vms_server/server/api/comments/read.php`);
      const data = res.json();
      return data;
    }
    useEffect(() => {
      const getComments = async () => {
        const commentData = await fetchCommentData();
        setComments(commentData.data);
      }   

      getComments();
    }, []);
  return (
  <div key={i} style={{height: '100vh'}} className="mt-5">
  <h1>{post.title}</h1>
  <h3>{post.user_name}</h3>
  <p className="text-white">{post.post}</p>
  <p className="text-white">{post.likes} likes</p>
  {/* <button onClick={onLike} className="mx-auto" style={{width: "100px"}}>Like</button> */}
<hr className="text-white" />
<div>
    {comments && comments.map(comment =>
      {if (comment.post_id === post.post_id) { 
        return <><div className="p-3" style={{backgroundColor: 'rgba(250,250,250,0.2', borderRadius: '10px'}}>
      <h4 className="text-white">{comment.user_name}</h4>
      <p className="text-white">{comment.comment}</p>
      </div>
      <hr className="text-white w-100" />
</>
      }
      }
)}
  </div>
</div>
  )
}

export default SinglePost