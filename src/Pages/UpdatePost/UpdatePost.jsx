import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";
import useBlogs from "../../Hooks/useBlogs";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { blogs } = useBlogs();
  const formRef = useRef(null);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const currentArticles = blogs.find((blog) => blog?._id === id);

  const onSubmit = async (data) => {
    await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success(`Article Updated successfully done.`);
          navigate("/manage-post");
        }
      });
    formRef.current.reset();
  };

  /* handle url blur  */
  const [imgUrl, setImgUrl] = useState("");
  const handleURLBlur = (event) => {
    setImgUrl(event.target.value);
  };

  return (
    <UpdatePostContainer className="update-post">
      <div className="container">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="form-wrapper"
          ref={formRef}
        >
          <h1>Update Post by {auth?.currentUser?.displayName}</h1>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="title"
              name="title"
              placeholder="Title"
              {...register("title", { required: true })}
              required
              defaultValue={currentArticles?.title}
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="category"
              name="category"
              placeholder="Category"
              {...register("category", { required: true })}
              required
              defaultValue={currentArticles?.category}
            />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Description</label>
            <textarea
              className="desc"
              name="desc"
              placeholder="Description"
              rows="7"
              {...register("description", { required: true })}
              required
              defaultValue={currentArticles?.description}
            ></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="url">Featured Image URL</label>
            <input
              type="url"
              placeholder="URL"
              {...register("url", { required: true })}
              name="url"
              id="url"
              required
              onBlur={handleURLBlur}
              defaultValue={currentArticles?.url}
            />
          </div>
          {imgUrl && (
            <div className="preview">
              <img src={imgUrl} width={400} alt="preview" />
            </div>
          )}
          <div className="input-group">
            <button className="btn btn-primary">Update Your Post</button>
          </div>
        </form>
      </div>
    </UpdatePostContainer>
  );
};

const UpdatePostContainer = styled.section`
  position: relative;
  .form-wrapper {
    width: 100%;
    margin: 2rem;
  }
`;

export default UpdatePost;
