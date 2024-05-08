import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useChatContext } from "../context/ChatContextProvider";
import generateUniqueId from "../utils/generateUniqueId";
import { useState } from "react";
import fetchPrompt from "../utils/fetchPrompt";

export default function ChatBox() {
  const { chat, setChat } = useChatContext();
  const [prompt, setPrompt] = useState("");
  async function addUserChat(e) {
    e.preventDefault();
    const id = generateUniqueId();
    
    setChat((prev) => {
      return {
        ...prev,
        [id]: { user: prompt, bot: "" },
      };
    });
    
    const data = await fetchPrompt(prompt);
    
    setChat((prev) => {
      return { ...prev, [id]: {...prev[id], bot: data } };
    });

    setPrompt("");
    
  }
  return (
    <Paper
      component="form"
      onSubmit={addUserChat}
      elevation={1}
      sx={{
        width: { xs: "100%", sm: "90%" },
        maxWidth: "1280px",
        padding: "10px",
        marginBottom: {
          xs: 8,
          sm: 0,
        },

        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
        flex: 1,
      }}
    >
      <TextField
        multiline
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask DocHub...."
        sx={{ width: "100%", resize: "vertical" }}
      />
      <IconButton type="submit">
        <SendIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
