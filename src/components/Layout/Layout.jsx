import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="wrapper">
      <header className="blog-header">
        <NavLink to='/posts/' className='blog-header__link'>Home</NavLink>
        <div> | </div>
        <NavLink to='/posts/new' className='blog-header__link'>Create New Post</NavLink>
      </header>
      <main className="blog-main">
        <Outlet />
      </main>
      <footer className="blog-footer">2022 | <a className="blog-footer__link" rel="stylesheet" href="https://github.com/korneef">GitHub</a></footer>
    </div>
  )
}