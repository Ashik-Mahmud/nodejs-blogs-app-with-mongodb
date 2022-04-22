import React from "react";
import styled from "styled-components";

const CreatePost = () => {
  return (
    <CreatePostContainer id="create-post">
      <div className="container">
        <h1>Create Post</h1>
      </div>
    </CreatePostContainer>
  );
};

const CreatePostContainer = styled.section`
  position: relative;
  padding: 2rem;
`;

export default CreatePost;
