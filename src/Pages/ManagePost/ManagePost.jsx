import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
import useBlogs from "../../Hooks/useBlogs";
const ManagePost = () => {
  const navigate = useNavigate();
  const { blogs } = useBlogs();
  const currentUserArticles = blogs.filter(
    (blog) => blog?.author?.uid === auth?.currentUser?.uid
  );
  console.log(currentUserArticles);
  return (
    <ManagePostContainer id="manage-post">
      <div className="container">
        <h1>ManagePost</h1>
        <div className="table-wrapper">
          {currentUserArticles.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Short Description</th>
                  <th>Image</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentUserArticles.map((article, ind) => (
                  <tr key={article._id}>
                    <td>{ind + 1}</td>
                    <td>{article?.createdAt}</td>
                    <td>
                      {article?.title.length > 30
                        ? article?.title.slice(0, 30)
                        : article?.title}
                    </td>
                    <td>
                      {article?.category ? article?.category : "Not Available"}
                    </td>
                    <td className="desc">
                      <p className="desc" title={article?.description}>
                        {article?.description.slice(0, 40) + "..."}
                      </p>
                    </td>
                    <td>
                      <img
                        width={100}
                        src={article?.url}
                        alt={article?.title}
                      />
                    </td>
                    <td>
                      <button className="btn btn-primary">
                        <BiEdit />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        <BiTrash />
                      </button>
                    </td>
                    <td>
                      <span className="colorize">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <EmptyPostContainer>
              <h3>Empty Post</h3>
              <button
                onClick={() => navigate("/create-post")}
                className="btn btn-primary"
              >
                Create Post
              </button>
            </EmptyPostContainer>
          )}
        </div>
      </div>
    </ManagePostContainer>
  );
};
const EmptyPostContainer = styled.div`
  position: relative;
  text-align: center;
  padding: 3rem;
  button {
    margin: 2rem auto;
  }
`;
const ManagePostContainer = styled.section`
  position: relative;
  padding: 2rem;
  .table-wrapper {
    margin: 2rem 0rem;
    table {
      width: 100%;
      text-align: left;
      th,
      td {
        padding: 0.4rem;
        border-bottom: 1px solid #f7f7f7;
        .colorize {
          color: green;
        }
        .desc {
          color: #888;
          font-size: 1rem;
        }
        img {
          border-radius: 5px;
        }
        button {
          padding: 0.4rem 0.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default ManagePost;
