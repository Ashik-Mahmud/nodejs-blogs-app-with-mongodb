import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <img
        src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-19.jpg"
        alt="loader"
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 3rem 0rem;
`;

export default Loader;
