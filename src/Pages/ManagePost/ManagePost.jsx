import React from "react";
import styled from "styled-components";

const ManagePost = () => {
  return (
    <ManagePostContainer id="manage-post">
      <div className="container">
        <h1>ManagePost</h1>
      </div>
    </ManagePostContainer>
  );
};

const ManagePostContainer = styled.section`
  position: relative;
  padding: 2rem;
`;

export default ManagePost;
