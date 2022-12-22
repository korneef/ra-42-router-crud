import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import moment from "moment/moment";

export default function Post({ id, created, content }) {
  const location = useLocation();
  const isItHomePage = /\/posts\/?$/.test(location.pathname);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`)
  }

  const className = classNames('post', {
    'post_active': isItHomePage
  })

  return (
    <div className={className} onClick={isItHomePage ? handleClick : null}>
      <div className="post__date-created">{moment(created).format('DD.MM.YYYY HH:mm')}</div>
      <div className="post__content">{content}</div>
    </div>
  )
}