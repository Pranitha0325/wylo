// src/components/CreatePostScreen.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreatePostScreen = ({ posts, onUpdatePost, onCreatePost }) => {
  const { id } = useParams(); // Get id from URL params for editing
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Initialize form fields if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const postToEdit = posts.find((post) => post.id === parseInt(id));
      if (postToEdit) {
        setTitle(postToEdit.title);
        setContent(postToEdit.content);
      }
    }
  }, [id, isEditMode, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      onUpdatePost({ id: parseInt(id), title, content });
    } else {
      onCreatePost({ title, content });
    }

    navigate("/");
  };

  return (
    <div className="create-post-container">
      <h1 style={{ textDecoration: "underline" }}>
        {isEditMode ? "Edit Post" : "Create Post"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "50px" }}>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "25px", marginTop: "0px" }}>
            Content:{" "}
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button" style={{ marginTop: "15px" }}>
          {isEditMode ? "Update Post" : "Submit Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostScreen;
