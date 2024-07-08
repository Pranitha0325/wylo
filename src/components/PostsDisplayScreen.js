// src/components/PostsDisplayScreen.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCommentDots,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import "./post.css"; // Assuming PostItem component is defined

const PostsDisplayScreen = ({ posts }) => {
  console.log(posts, "complete post details ");
  const [commentBox, setCommentBox] = useState(false);

  const toggleCommentBox = () => {
    setCommentBox(!commentBox);
  };
  return (
    <div className="bg-container">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: posts.length === 0 ? "column" : "row",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <h1 style={{ marginTop: "0px" }}>Posts</h1>
          <Link to="/create-post">
            <button className="button">Create New Post</button>
          </Link>
        </div>

        {posts.map((post) => (
          <div className="blog-container">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>Title: {post.title}</h2>
                <Link to={`/edit-post/${post.id}`}>
                  <button className="button">Edit</button>
                </Link>
              </div>

              <div className="meta-info">
                <p>Description: {post.content}</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  fontSize: "30px",
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon
                  icon={faCommentDots}
                  onClick={() => toggleCommentBox()}
                />
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsDisplayScreen;
