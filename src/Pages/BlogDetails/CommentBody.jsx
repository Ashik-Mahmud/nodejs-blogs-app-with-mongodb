import React from "react";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
const CommentBody = ({
  comment,
  author,
  createdAt,
  _id,
  handleDeleteComment,
}) => {
  return (
    <CommentBodyContainer>
      <div className="avatar">
        {author?.photoUrl ? (
          <img src={author?.photoUrl} alt={author?.name} />
        ) : (
          <span>{author?.name.slice(0, 1)}</span>
        )}
      </div>
      <div className="details">
        <div className="title">
          <h3>{author?.name}</h3>
          <ul>
            {createdAt.split("-").map((name, ind) => (
              <li key={name + ind}>{name}</li>
            ))}
          </ul>
        </div>
        <p className="comment-text">{comment}</p>
        {auth?.currentUser?.uid === author?.uid && (
          <div className="delete" onClick={() => handleDeleteComment(_id)}>
            <BsTrash />
          </div>
        )}
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
  margin: 1rem 0rem;
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
    overflow: hidden;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
