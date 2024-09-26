import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then((response) => response.json()) 
      .then((data) => setContent(data.post.content)) 
      .catch(error => console.error('Error fetching posts:', error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =  await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content })
    })

    if (response.ok) {
      navigate(`/posts/${id}`);
    } else {
      console.error('Ошибка при удалении поста:', response.statusText);
    }
  };

  return (
    <div>
      <h1 className="post-header">Редактировать публикацию</h1>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Содержимое поста"/>
        <div className="btn-group">
          <button type="submit" className="push-btn create-link-btn" >Сохранить</button>
          <button 
            type="button" 
            onClick={() => navigate(`/posts/${id}`)} 
            className="close-btn create-link-btn">Закрыть
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;

