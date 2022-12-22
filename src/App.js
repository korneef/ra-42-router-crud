import './App.css';
import { useState } from 'react';
import { Posts, NewPost, Layout, PostsContext, WrapperPost, PostEdit } from './components/index.js';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <PostsContext.Provider value={{posts, setPosts}}> 
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Navigate to='/posts' />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/new' element={<NewPost />} />
            <Route path='/posts/:id' element={<WrapperPost />} />
            <Route path='/posts/:id/edit' element={<PostEdit />} />
          </Route>
        </Routes>
      </PostsContext.Provider>
    </div>
  );
}

export default App;

// --- / - get from server /posts
// --- /posts/new - page for create new post (after touch send button send fetch POST on adress /posts/)
// --- /posts/{postId} - open post page

// in post page we have two button - edit and delete
// delete - send fetch with method DELETE to adress /posts/{id}
// edti - open page for edit post. If click to close - return on card page, if click to save fetch with method POST on /posts/