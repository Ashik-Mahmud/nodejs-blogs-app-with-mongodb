import React from "react";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
const CommentBody = () => {
  return (
    <CommentBodyContainer>
      <div className="avatar">
        <span>N</span>
      </div>
      <div className="details">
        <div className="title">
          <h3>Ashik Mahmud</h3>
          <ul>
            <li>May 17th 2022</li>
            <li>1:59:46 am</li>
          </ul>
        </div>
        <p className="comment-text">Are you sure? is this work?</p>
        <div className="delete">
          <BsTrash />
        </div>
      </div>
    </CommentBodyContainer>
  );
};
const CommentBodyContainer = styled.div`
  position: relative;
  background: #f8f8f8;
  padding: 0.6rem;
  border-radius: 5px;
  display: flex;
  gap: 1.5rem;
  margin: 0.5rem 0rem;
  .delete {
    position: absolute;
    bottom: 5px;
    right: 5px;
    cursor: pointer;
    color: tomato;
  }
  .avatar {
    width: 100px;
    height: 80px;
    border: 1px solid #ccc;
    display: grid;
    place-items: center;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 4px;
  }
  .details {
    position: relative;
    width: 100%;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 90%;
      margin: 0px !important;
      padding: 0px !important;
      ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 0.9rem;
      }
    }
    h3 {
      margin: 0px;
    }
    p {
      margin: 0px 0px !important;
    }
  }
`;
export default CommentBody;
