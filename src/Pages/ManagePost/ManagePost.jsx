import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
import useBlogs from "../../Hooks/useBlogs";
import useTitle from "../../Hooks/useTitle";
const ManagePost = () => {
  useTitle("Manage post");

  const navigate = useNavigate();
  const { blogs } = useBlogs();
  const [currentUserBlogs, setCurrentUserBlogs] = useState([]);
  useEffect(() => {
    const currentUserArticles = blogs.filter(
      (blog) => blog?.author?.uid === auth?.currentUser?.uid
    );
    setCurrentUserBlogs(currentUserArticles);
  }, [blogs]);

  /* handle Delete post  */
  const handleDeletePost = async (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://node-blog-management.herokuapp.com/blog/${id}`;
      await fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Article is deleted successfully done.");
            const restArticles = currentUserBlogs.filter(
              (blog) => blog._id !== id
            );
            setCurrentUserBlogs(restArticles);
          }
        });
    }
  };

  return (
    <ManagePostContainer id="manage-post">
      <div className="container">
        <h1>ManagePost</h1>
        <div className="table-wrapper">
          {currentUserBlogs.length > 0 ? (
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
                {currentUserBlogs.map((article, ind) => (
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
                      <button
                        onClick={() => navigate(`/update-post/${article?._id}`)}
                        className="btn btn-primary"
                      >
                        <BiEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeletePost(article?._id)}
                        className="btn btn-danger"
                      >
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
