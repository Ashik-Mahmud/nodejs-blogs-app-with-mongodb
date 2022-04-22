import React from "react";
import styled from "styled-components";

const CreatePost = () => {
  return (
    <CreatePostContainer id="create-post">
      <div className="container">
        <form action="" className="form-wrapper">
          <h1>Create Post</h1>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="title"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="category"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              className="desc"
              name="desc"
              placeholder="Description"
              rows="7"
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="url">Featured Image URL</label>
            <input type="url" placeholder="URL" name="url" id="url" />
          </div>
          <div className="input-group">
            <button className="btn btn-primary">Save Your Post</button>
          </div>
        </form>
      </div>
    </CreatePostContainer>
  );
};

const CreatePostContainer = styled.section`
  position: relative;
  padding: 2rem;
  .form-wrapper {
    width: 100%;
  }
`;

export default CreatePost;
