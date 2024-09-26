import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  const apiURL = import.meta.env.VITE_API_URL;
  //const apiURL = import.meta.env.VITE_API_URL_SVC;

  useEffect(() => {
    axios.get(apiURL + '/weatherforecast')
      .then(response => {
        console.log(apiURL + '/weatherforecast');
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h6>API URL: {apiURL + "/weatherforecast"}</h6>
    <ul>
      {posts.map(post => (
        <li key={post.date}>{post.date} {post.temperatureF} &deg;F {post.summary}</li>
      ))}
    </ul>
    </div>
  
    
  );
}

export default App;