import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import './viewPost.css';

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json()) 
      .then((data) => setPosts(data.post)) 
      .catch(error => console.error('Error fetching posts:', error));
  }, [id]);

  const handleDelete = async () => {
    const response =  await fetch(`http://localhost:7070/posts/${id}`, {method: 'DELETE'})

    if (response.ok) {
      navigate('/');
    } else {
      console.error('Ошибка при удалении поста:', response.statusText);
    }
  };

  return (
    <div>
      <h1 className="post-header">Просмотр поста</h1>
        <div className="posts">
          <div key={post.id} className="post-item">
            <div className="info-about-author">
              <img className="author-photo" src="https://cdn-icons-png.flaticon.com/256/4825/4825076.png" alt="author" />
              <div className="author-name">Melissa Heart</div>
              <p className="post-date">{new Date(post.created).toLocaleString()}</p>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="btn-group">
              <button className="create-btn create-post-btn">
                <Link to={`/posts/${id}/edit`} className="create-btn  create-link-btn">Изменить</Link>
              </button>
              <button onClick={handleDelete}  className="delete-btn create-post-btn create-link-btn">Удалить</button>
            </div>
            <br />
            <button className="back-btn create-post-btn">
              <Link to="/" className="create-link-btn">Назад к списку</Link>
            </button>
          </div>
      </div>
    </div>
  );
}

export default ViewPost;

