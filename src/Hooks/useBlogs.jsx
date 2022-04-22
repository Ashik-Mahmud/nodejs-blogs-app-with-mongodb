import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/blogs`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(true);
      });
  }, []);

  return { setBlogs, blogs, loading };
};

export default useBlogs;
