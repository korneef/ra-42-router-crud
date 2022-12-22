import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { PostsContext } from "../Posts/PostsContext";

export default function PostEdit() {
  const {id} = useParams();
  const {posts} = useContext(PostsContext);
  const [TextContent, setTextContent] = useState()
  const navigate = useNavigate();

  const postId = Number(id)
  const post = posts.find(item => item.id === postId);
  useEffect(()=>{
    setTextContent(post?.content)
  }, [post?.content])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = JSON.stringify({ id: postId, content: TextContent });
    fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      body: body
    }).then(() => navigate(`/posts/${postId}`))
  }

  const handleAbort = () => navigate(`/posts/${postId}`);
  

  const handleChange = (evt) => {
    setTextContent(evt.target.value);
  }

  return (
    <div className="new-post">
      <form action="" className="new-post__form">
        <textarea value={TextContent} name="post-content" id="" onChange={handleChange} className="edit-post__textarea"></textarea>
        <div className="buttons-wrapper">
          <button className="new-post__send-button button" onClick={handleSubmit}>Сохранить</button>
          <button className="new-post__send-button button" onClick={handleAbort}>Отменить изменения</button>
        </div>
      </form>
    </div>
  ) 
}