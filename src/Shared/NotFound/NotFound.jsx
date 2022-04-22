import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer id="not-found">
      <img
        src="https://cloud.mongodb.com/static/images/sadface.gif"
        alt="not-found"
      />
    </NotFoundContainer>
  );
};
const NotFoundContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 3rem 0rem;
`;
export default NotFound;
