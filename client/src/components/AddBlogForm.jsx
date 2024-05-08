import { useDialogContext } from "../context/DialogContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFileContext } from "../context/FileContextProvider";
import { useState } from "react";
import addBlog from "../utils/addBlog";
import { useNavigate } from "react-router-dom";

export default function AddBlogForm() {
  const { open, handleClose ,id } = useDialogContext();

  const { filename } = useFileContext();

  const [author, setAuthor] = useState("");

  const redirect = useNavigate()

  const publishBlog = async()=>{
    const blogId = await addBlog({id,author,title:filename})
    handleClose()
    alert("success")
    redirect(`/blog/${blogId}`)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Publish</DialogTitle>
      <DialogContent>
        <DialogContentText>You Can Publish Your Work As Blog</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Author"
          type="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={filename}
          label="Blog Title"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button disabled={author.trim().length === 0} onClick={publishBlog}>
          Publish
        </Button>
      </DialogActions>
    </Dialog>
  );
}
