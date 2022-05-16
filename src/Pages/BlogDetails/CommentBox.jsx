import React from "react";
import { BiSend } from "react-icons/bi";
import styled from "styled-components";

const CommentBox = () => {
  return (
    <CommentBoxContainer>
      <form action="/">
        <div className="input-group">
          <input
            type="text"
            placeholder="Write here comment..."
            name="comment-box"
          />
          <button>
            <BiSend />
          </button>
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
