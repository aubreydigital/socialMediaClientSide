import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext';

const AddComment = ({visible, margTop, postId}) => {
  const {user, getPosts} = useContext(UserContext);
  const [comment, setComment] = useState('');

    const onAdd = async (e) => {
        e.preventDefault();
        // setUserId(from.id);
        let newComment = { user_name: user.user_name, post_id: postId, comment: comment};
        try {
          await fetch('http://localhost:8888/social_media/server/api/comments/create.php', {
            // await fetch(`https://aubrey.digital/vms_server/server/api/posts/create.php`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newComment)
          });
          getPosts();
      } catch (err) {
          console.error('Comment could not be created');
      }
        console.log(newComment);
        
    }
    return (
    <div style={{visibility: visible, marginTop: margTop }}><h3>Add a Comment</h3>
    <form>
        <label htmlFor="comment">Comment:</label><br />
        <textarea className="rounded my-3" onChange={(e) => setComment(e.target.value)} style={{width: '400px'}} rows="5"></textarea><br/>
        <button type="submit" onClick={onAdd}>Submit</button>
    </form>
    </div>
  )
}

export default AddComment