import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import { postsContext } from "./postsContext.js";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetch("http://localhost:5000/posts");
        const results = await posts.json();
        setPosts(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  console.log(posts);
  return (
    <div className="App">
      <postsContext.Provider value={[posts, setPosts]}>
        <AppBar className="appBar" position="static" color="primary">
          <Typography className="heading" variant="h2" align="center">
            Notes
          </Typography>
        </AppBar>
        <Form />
        <Posts />
      </postsContext.Provider>
    </div>
  );
}

export default App;
