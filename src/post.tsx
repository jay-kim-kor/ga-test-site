import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { usePageViews } from './App';

const Post = () => {
  usePageViews()
  const { postId } = useParams()
  const number = postId ? parseInt(postId) : 0

  return (
    <div>
      <h1>Post {number}</h1>
      <p>This is a post {number}</p>
      <p><Link to="/">Back to home</Link></p>
    </div>
  );
};

export default Post;