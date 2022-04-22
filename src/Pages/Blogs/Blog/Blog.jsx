import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Blog = ({
  _id,
  title,
  category,
  description,
  author,
  createdAt,
  url,
}) => {
  const navigate = useNavigate();
  return (
    <BlogContainer>
      <div className="image">
        <img src={url} alt={title} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <ul className="meta">
          <li>
            <span className="colorize">{createdAt}</span>
          </li>
          <li>
            <span className="colorize">{author?.name}</span>
          </li>
          <li>
            <span className="colorize">{category}</span>
          </li>
        </ul>
        <p>
          {description?.length > 200 ? (
            <>
              {description.slice(0, 200)}{" "}
              <span
                onClick={() => navigate(`/blog-detail/${_id}`)}
                className="colorize cursor-pointer"
              >
                Read more
              </span>
            </>
          ) : (
            description
          )}
        </p>
      </div>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  position: relative;
  padding: 1rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background: #fff;
  .image {
    height: 200px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 0.6rem;
    border: 1px solid #f8f8f8;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    margin: 0.3rem 0rem;
  }
  p {
    line-height: 1.7;
    font-size: 0.9rem;
    color: #888;
  }
`;

export default Blog;
