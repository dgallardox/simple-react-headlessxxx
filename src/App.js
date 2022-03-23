import './App.css';
import Post from './components/Post';

function App() {

  const posts = [
    {
      id: 1,
      title: "test",
    },
    {
      id: 2,
      title: "test2",
    },
    {
      id: 3,
      title: "test3"
    },
  ];

  return (
    <div className="App">
      <h2>My Posts</h2>

      {posts.map((post) => (
        < Post title={post.title} />
      ))}
    </div>
  );
}

export default App;
