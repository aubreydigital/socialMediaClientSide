import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
const PostComments = ({post_id}) => {
  const [comments,setComments] = useState([]);
  const {params} = useParams;
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
  return <div>
    {comments.map(comment =>
      {comment.post_id === post_id && <>
      <h3>{comment.user_name}</h3>
      <p>{comment.comment}</p>
      </>
      }
)}
  </div>;
};

export default PostComments;
