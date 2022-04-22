import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useBlogs from "../../Hooks/useBlogs";
import useTitle from "../../Hooks/useTitle";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { blogs } = useBlogs();

  const singleBlog = blogs.find((blog) => blog._id === blogId);
  useTitle(singleBlog?.title);
  return (
    <BlogDetailsContainer>
      <div className="container">
        <div className="card">
          <div className="card-image">
            <img src={singleBlog?.url} alt={singleBlog?.title} />
          </div>
          <div className="card-body">
            <h2>{singleBlog?.title}</h2>
            <ul className="meta">
              <li>
                Date - <span className="colorize">{singleBlog?.createdAt}</span>
              </li>
              <li>
                Author -{" "}
                <span className="colorize">{singleBlog?.author?.name}</span>
              </li>
              <li>
                Category -{" "}
                <span className="colorize">{singleBlog?.category}</span>
              </li>
            </ul>
            <div className="details">
              <p>{singleBlog?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </BlogDetailsContainer>
  );
};

const BlogDetailsContainer = styled.section`
  position: relative;
  padding: 2rem;
  @media (max-width: 668px) {
    padding: 0rem;
  }
  .card {
    position: relative;
    padding: 1rem;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    .card-image {
      height: 340px;
      overflow: hidden;
      border-radius: 5px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .card-body {
      margin: 1rem 0rem;
      .meta {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      p {
        line-height: 1.7;
        color: #666;
        margin: 1rem 0rem;
        text-align: justify;
      }
    }
  }
`;
export default BlogDetails;
