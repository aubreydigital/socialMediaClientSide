import { useContext } from 'react'
import {Link} from 'react-router-dom'
import PostComments from '../components/PostComments'
import UserContext from '../context/UserContext'
import SinglePost from './SinglePost'
const Posts = () => {
  const {posts, comments} = useContext(UserContext)
  return (
      <div className="d-flex flex-column text-center mx-2 justify-content-center">
    {posts && posts.map((post, i) => (
      <SinglePost comments={comments} i={i} post={post}/>
    ))}
<Link className="pb-5" to={`/feed`}>Back to Feed</Link>
    
    </div>
  )
}

export default Posts