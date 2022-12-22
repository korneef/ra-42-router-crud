import { useNavigate, Link } from "react-router-dom";

export default function NewPost(props) {
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = JSON.stringify({ id: 0, content: evt.target['post-content'].value });
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      body: body
    }).then(() => navigate('/posts'))
  }

  return (
    <div className="new-post">
      <form action="" className="new-post__form" onSubmit={handleSubmit}>
        <textarea name="post-content" id="" className="new-post__textarea"></textarea>
        <div className="buttons-wrapper">
          <button className="new-post__send-button button">Create New Post</button>
          <Link to='/posts'><button className="new-post__close button">X</button></Link>

        </div>
      </form>
    </div>
  )
}