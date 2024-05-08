import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import "../blog.css";
import fetchSingleBlog from "../utils/fetchSingleBlog";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { setStorage } from "../utils/storage";

export default function SingleBlog() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [quil, setQuill] = useState();
  const { id } = useParams();
  setStorage()
  useEffect(() => {
    if (!quil) return;
    const blog = fetchSingleBlog(id).then(({ data, filename }) => {
      quil.updateContents(data);
      setTitle(filename);
    });
  }, [quil]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;

    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
    });
    q.disable();
    setQuill(q);
  }, []);

  return (
    <Stack padding="1rem" width="100%">
    <Typography variant="h4" fontWeight="bold">
        {title}
    </Typography>
    <Divider/>
      <div id="editor" ref={wrapperRef}></div>
    </Stack>
  );
}
