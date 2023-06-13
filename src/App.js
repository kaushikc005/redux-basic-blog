import './App.css';
import FormPost from './features/posts/FormPost';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
      <h1>Redux Blog Posts</h1>
      <FormPost />
      <PostList />
    </div>
  );
}

export default App;
