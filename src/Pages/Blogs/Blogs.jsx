import React from "react";
import styled from "styled-components";
import useBlogs from "../../Hooks/useBlogs";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const { blogs } = useBlogs();
  return (
    <BlogsContainer id="blogs">
      <div className="container">
        <div className="title">
          <h2>Latest & All Articles {new Date().toDateString()}</h2>
          <p>Get you knowledge next level you should read blog</p>
        </div>
        {blogs.length > 0 ? (
          <div className="blogs-container">
            {blogs.map((blog) => (
              <Blog key={blog._id} {...blog} />
            ))}
          </div>
        ) : (
          "No Post found now."
        )}
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
