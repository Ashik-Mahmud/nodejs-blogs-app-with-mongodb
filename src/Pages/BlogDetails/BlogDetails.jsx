import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import { auth } from "../../Firebase/Firebase.config";
import useBlogs from "../../Hooks/useBlogs";
import useComment from "../../Hooks/useComment";
import useTitle from "../../Hooks/useTitle";
import CommentBody from "./CommentBody";
import CommentBox from "./CommentBox";
const BlogDetails = () => {
  const { blogId } = useParams();
  const { blogs, loading: blogLoading } = useBlogs();
  const [refetch, setRefetch] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const [comments, loading] = useComment(blogId, refetch);
  /* handle Comments box */
  const handleCommentForm = async (event) => {
    event.preventDefault();
    const commentText = event.target.comment.value;
    if (!commentText) return toast.error(`Comment Field is required.`);

    fetch(`https://node-blog-management.herokuapp.com/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        comment: commentText,
        postId: blogId,
        createdAt:
          new Date().toDateString() + "-" + new Date().toLocaleTimeString(),
        author: {
          name: auth.currentUser?.displayName,
          uid: auth?.currentUser?.uid,
          photoUrl: auth?.currentUser?.photoURL,
        },
      }),
    }).then((data) => {
      toast.success(data?.message);
      event.target.reset();
      setRefetch((prev) => !prev);
    });
  };

  /*  Handle Deleted Comment  */
  const handleDeleteComment = async (id) => {
    const isConfirm = window.confirm("Are you sure to delete this comment?");
    if (isConfirm) {
      await fetch(`https://node-blog-management.herokuapp.com/comment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(data?.message);
          setRefetch((prev) => !prev);
        });
    }
  };

  const singleBlog = blogs.find((blog) => blog._id === blogId);
  useTitle(singleBlog?.title || "loading....");
  if (!blogLoading) return <Loader />;
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
                  <CommentBox handleCommentForm={handleCommentForm} />
                </div>
              )}
              <div className="comments">
                {loading ? (
                  comments.length > 0 ? (
                    comments.map((comment) => (
                      <CommentBody
                        handleDeleteComment={handleDeleteComment}
                        key={comment._id}
                        {...comment}
                      />
                    ))
                  ) : (
                    "No comments added yet."
                  )
                ) : (
                  <Loader />
                )}
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
