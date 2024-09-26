import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostList from '../postList/PostList';
import NewPost from '../newPost/NewPost';
import ViewPost from '../viewPost/ViewPost';
import EditPost from '../editPost/EditPost';

import './app.css';

const App = () => {
	return (
		<Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<ViewPost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
	);
}

export default App;
