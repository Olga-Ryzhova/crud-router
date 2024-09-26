import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './postList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7070/posts')
      .then((response) => response.json()) 
      .then((data) => setPosts(data)) 
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="post-list">
      <h1 className="post-header">Спиcок постов</h1>
      <div className="create-post">
        <button className="create-post-btn">
          <Link to="/posts/new" className="create-link-btn">Создать пост</Link>
        </button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="info-about-author">
              <img className="author-photo" src="https://cdn-icons-png.flaticon.com/256/4825/4825076.png" alt="author" />
              <div className="author-name">Melissa Heart</div>
              <p className="post-date">{new Date(post.created).toLocaleString()}</p>
            </div>
            <Link to={`/posts/${post.id}`} className="post-content">{post.content}</Link>
          </div>
        ))} 
      </div>
    </div>
  )
  
}

export default PostList;


