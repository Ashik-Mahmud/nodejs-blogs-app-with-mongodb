import React from "react";
import styled from "styled-components";
import Blog from "./Blog/Blog";

const Blogs = () => {
  return (
    <BlogsContainer id="blogs">
      <div className="container">
        <div className="title">
          <h2>Latest & All Articles</h2>
          <p>Get you knowledge next level you should read blog</p>
        </div>
        <div className="blogs-container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </BlogsContainer>
  );
};

const BlogsContainer = styled.section`
  position: relative;
  padding: 2rem;
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin: 1rem 0rem;
  }
`;

export default Blogs;
