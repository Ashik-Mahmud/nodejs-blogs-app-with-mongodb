import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useBlogs from "../../Hooks/useBlogs";
import useTitle from "../../Hooks/useTitle";
import CommentBody from "./CommentBody";
import CommentBox from "./CommentBox";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { blogs } = useBlogs();
  const [showCommentBox, setShowCommentBox] = useState(false);

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
            <div className="comments-area">
              <div className="comments-area-title">
                <h2>All Comments -</h2>
                <span
                  onClick={() => setShowCommentBox((prevState) => !prevState)}
                  className="toggle-comment-box"
                >
                  {showCommentBox ? "Hide" : "Show"} Comment
                </span>
              </div>
              {showCommentBox && (
                <div className="comment-box">
                  <CommentBox />
                </div>
              )}
              <div className="comments">
                <CommentBody />
              </div>
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
  .comments-area {
    margin: 2rem 0rem;
    padding: 1rem 2rem;
    border-top: 1px solid #ccc;
    .comments-area-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.3rem 0rem;
      .toggle-comment-box {
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        padding: 3px 6px;
        font-size: 0.9rem;
        border-radius: 4px;
      }
    }
  }
`;
export default BlogDetails;
