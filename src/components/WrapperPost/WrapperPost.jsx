import { Post, PostsContext } from '../index';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';

export default function WrapperPost(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostsContext);
  const postId = Number(id);

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL)
    .then(response => response.json())
    .then(newPosts => setPosts(newPosts));
  }, [setPosts])

  const post = posts.find(item => item.id === Number(id))

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/${postId}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/posts'))
  }

  return (
    <div className='wrapper-post'>
      {posts.length === 0 ? null : <Post id={post.id} created={post.created} content={post.content} />}
      <div className="post__control">
        <div className="buttons-wrapper">
          <Link to='/posts'><button className="post__close button">X</button></Link>
          <Link to={`/posts/${postId}/edit`}><button className="post__edit button">Редактировать</button></Link>
          <button className="post__delete button" onClick={handleDelete}>Удалить</button>
        </div>
      </div>
    </div>
  )
}