import React from "react";
import { BiSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";

const CommentBox = ({ handleCommentForm }) => {
  const navigate = useNavigate();
  return (
    <CommentBoxContainer>
      <form action="/" onSubmit={handleCommentForm}>
        <div className="input-group">
          <div className="image">
            <img
              src={`${
                auth?.currentUser?.photoURL
                  ? auth.currentUser.photoURL
                  : "https://i.ibb.co/LtSrBZh/Parker96.webp"
              }`}
              alt="avatar"
            />
          </div>
          <input
            type="text"
            placeholder="Write here comment..."
            name="comment"
          />
          {auth?.currentUser ? (
            <button type="submit">
              <BiSend />
            </button>
          ) : (
            <button type="button" onClick={() => navigate(`/login`)}>
              <BiSend />
            </button>
          )}
        </div>
      </form>
    </CommentBoxContainer>
  );
};

const CommentBoxContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  .input-group {
    display: flex;
    align-items: stretch;
    margin: 0.3rem 0rem;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.3rem;
    .image {
      border-radius: 5px;
      margin-right: 0.6rem;
      width: 60px;
      height: 50px;
      overflow: hidden;
      border: 1px solid #ccc;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    input {
      border: 1px solid transparent;
    }
    button {
      padding: 0rem 1rem;
      background: var(--primary-color);
      border: none;
      outline: none;
      border-radius: 5px;
      font-size: 1.1rem;
      color: #fff;
    }
  }
`;

export default CommentBox;
