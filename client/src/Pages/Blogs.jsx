import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import fetchBlogs from "../utils/fetchBlogs";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import BlogBg from "../assets/blog-bg.png";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <Stack gap={3} width="100%" marginBottom="3rem" sx={{paddingTop:{xs:"1rem",sm:"3rem"}}}>
      <Stack
        justifyContent="center"
        alignItems="center"
        marginX="auto"
        sx={{
          width: {xs:"95%",sm:"80%"},
          height: {xs:"12rem",sm:"17rem"},
          background: `black url(${BlogBg}) no-repeat`,
          borderRadius:"10px"
        }}
      >
        <Typography variant="h4" fontWeight="bold" fontSize="3rem" sx={{backdropFilter:"blur(1px)"}}>Blogs</Typography>
      </Stack>
      <Stack paddingX="1rem" marginX="auto" sx={{width:{xs:"90%",sm:"80%"}}}>
        {blogs?.map(({ title, _id, author }) => {
          return (
            <>
              <Stack alignItems="flex-start" paddingY="10px" paddingX="1rem" gap={1}>
                <Link
                  to={`/blog/${_id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ "&:hover": { color: "gray" } }}
                  >
                    {title}
                  </Typography>
                </Link>
                <Stack flexDirection="row" gap={1} alignItems="center">
                  <Typography>-by</Typography> <Chip label={author} />
                </Stack>
              </Stack>
              <Divider />
            </>
          );
        })}
      </Stack>
    </Stack>
  );
}
