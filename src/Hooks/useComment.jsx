import { useEffect, useState } from "react";

const useComment = (postId, refetch) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      fetch(
        `https://simple-blogs-app-v1.onrender.com/comments?postId=${postId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setComments(data?.result);
          setLoading(true);
        });
    })();
  }, [postId, refetch]);
  return [comments, loading];
};

export default useComment;
