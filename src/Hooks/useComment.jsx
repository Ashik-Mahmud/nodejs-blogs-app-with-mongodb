import axios from "axios";
import { useEffect, useState } from "react";

const useComment = (postId, refetch) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      axios
        .get(`http://localhost:5000/comments?postId=${postId}`)
        .then((data) => {
          setComments(data.data.result);
          setLoading(true);
        });
    })();
  }, [postId, refetch]);
  return [comments, loading];
};

export default useComment;
