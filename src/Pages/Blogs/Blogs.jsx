import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import useBlogs from "../../Hooks/useBlogs";
import Blog from "./Blog/Blog";
const Blogs = () => {
  const [search, setSearch] = useState("");
  const { setBlogs, blogs, loading } = useBlogs();

  const handleSearch = async () => {
    if (!search) return toast.error("Search Field is required.");
    await fetch(
      `http://localhost:5000/blogs/search?title=${search.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  };
  return (
    <BlogsContainer id="blogs">
      <div className="container">
        <div className="title">
          <div>
            <h2>Latest & All Articles </h2>
            <p>Get you knowledge next level you should read blog</p>
          </div>
          <div className="search">
            <input
              onBlur={(event) => setSearch(event.target.value)}
              type="search"
              placeholder="Search Blog"
              name="Search"
            />
            <button onClick={handleSearch} className="btn btn-primary">
              <BsSearch />
            </button>
          </div>
        </div>
        {loading ? (
          blogs.length > 0 ? (
            <div className="blogs-container">
              {blogs.map((blog) => (
                <Blog key={blog._id} {...blog} />
              ))}
            </div>
          ) : (
            "No Post found now."
          )
        ) : (
          <Loader />
        )}
      </div>
    </BlogsContainer>
  );
};

const BlogsContainer = styled.section`
  position: relative;
  padding: 2rem;
  @media (max-width: 668px) {
    padding: 0rem;
  }
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin: 1rem 0rem;
    @media (max-width: 668px) {
      grid-template-columns: 1fr;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 668px) {
      flex-direction: column;
    }
  }
  .search {
    position: relative;
    display: flex;
    align-items: stretch;
    background: #fff;
    padding: 0.4rem;
    width: 40%;
    border-radius: 5px;
    @media (max-width: 668px) {
      width: 100%;
      margin-top: 2rem;
    }
    input {
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: poppins;
      width: 100%;
      padding: 0.56rem;
    }
  }
`;

export default Blogs;
