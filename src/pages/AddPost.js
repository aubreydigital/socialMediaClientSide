import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
const AddPost = () => {
    const {user, onAddPost, title, setTitle, post, setPost} = useContext(UserContext);

 
    const nav = useNavigate();


  return <div className="frontPage"><h1>Add New Post</h1><br />
  <form onSubmit={onAddPost}>
  <label htmlFor="title">Title:</label><br />
  <input style={{borderRadius: '10px', height: '40px', textAlign: 'center'}} type="text" name="title" placeholder="Enter a subject" value={title} onChange={(e) => setTitle(e.target.value)}></input><br/><br />
  <label htmlFor="post">post:</label><br />
  <textarea style={{borderRadius: '10px',alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} rows='15' cols='30' name="post" placeholder="Enter your message" value={post} onChange={(e) => setPost(e.target.value)}/><br/>
  <button type="submit" className="button" name="submit">Submit</button><br/> <br />
  </form>
  <Link to={`/feed/`}>Back To Feed</Link>
</div>;
};

export default AddPost;
