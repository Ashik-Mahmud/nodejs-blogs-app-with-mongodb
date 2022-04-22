import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import { auth } from "../../Firebase/Firebase.config";

const CreatePost = () => {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    data.author = {
      name: auth?.currentUser?.displayName,
      uid: auth?.currentUser?.uid,
    };
    data.createdAt = new Date().toDateString();

    await fetch(`http://localhost:5000/blogs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success(`Article created successfully done.`);
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
    <CreatePostContainer id="create-post">
      <div className="container">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="form-wrapper"
          ref={formRef}
        >
          <h1>Create Post</h1>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="title"
              name="title"
              placeholder="Title"
              {...register("title", { required: true })}
              required
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
            />
          </div>
          {imgUrl && (
            <div className="preview">
              <img src={imgUrl} width={400} alt="preview" />
            </div>
          )}
          <div className="input-group">
            <button className="btn btn-primary">Save Your Post</button>
          </div>
        </form>
      </div>
    </CreatePostContainer>
  );
};

const CreatePostContainer = styled.section`
  position: relative;
  padding: 2rem;
  @media (max-width: 668px) {
    padding: 0rem;
  }
  .form-wrapper {
    width: 100%;
  }
`;

export default CreatePost;
