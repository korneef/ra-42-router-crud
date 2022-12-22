import { Post, PostsContext } from "../index.js";
import { useEffect, useContext } from "react";

export default function Posts() {
  const {posts, setPosts} = useContext(PostsContext);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL)
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, [setPosts])

  return (
      <div className="posts-list">
        {posts.map(item => <Post 
        key={item.id} 
        id={item.id} 
        content={item.content}
        created={item.created}
        />).reverse()}
      </div>
  )
}