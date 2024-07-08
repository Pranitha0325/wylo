// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsDisplayScreen from "./components/PostsDisplayScreen";
import CreatePostScreen from "./components/CreatePostScreen";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Function to handle updating a post
  const handleUpdatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  // Function to handle creating a new post
  const handleCreatePost = (newPost) => {
    newPost.id = Date.now(); // Assign a temporary id (in practice, use your backend logic)
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsDisplayScreen posts={posts} />} />
        <Route
          path="/create-post"
          element={
            <CreatePostScreen onCreatePost={handleCreatePost} posts={posts} />
          }
        />
        <Route
          path="/edit-post/:id"
          element={
            <CreatePostScreen onUpdatePost={handleUpdatePost} posts={posts} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
