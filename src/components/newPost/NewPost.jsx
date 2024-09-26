import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './newPost.css'

const NewPost = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })
    
    if (response.ok) {
      navigate('/');
    } else {
      console.error('Ошибка при создании поста:', response.statusText);
    }
  }
  
  return (
    <div>
      <h1 className="post-header">Создать новый пост</h1>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Содержимое поста"
        />
        <div className="btn-group">
          <button 
            type="submit" 
            disabled={!content.trim()} 
            className="push-btn create-link-btn">Опубликовать
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="close-btn create-link-btn">Закрыть
          </button>
        </div>
       
      </form>
    </div>
  )
}

export default NewPost;

