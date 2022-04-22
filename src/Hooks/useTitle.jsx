import { useEffect, useState } from "react";

const useTitle = (title) => {
  const [appTitle, setAppTitle] = useState("");
  useEffect(() => {
    document.title = title + " - Blog Application";
    setAppTitle(title);
  }, [title]);
  return { appTitle };
};

export default useTitle;
