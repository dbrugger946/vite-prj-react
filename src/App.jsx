import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const apiURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (

    <><div>API URL: {apiURL}</div><ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul></>
    
  );
}

export default App;