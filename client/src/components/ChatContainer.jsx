import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AiChatSprite, HumanChatSprite } from "./ChatSprite";
import { useChatContext } from "../context/ChatContextProvider";

export default function ChatContainer() {
  const { chat } = useChatContext();
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        gap: 2,
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: 0,
        },
      }}
    >
      {Object.keys(chat).map((id) => {
        const data = chat[id];
        const user = data["user"];
        const bot = data["bot"];

        return (
          <Box key={id} width="100%">
            <HumanChatSprite chat={user} />
            <AiChatSprite chat={bot} />
          </Box>
        );
      })}
    </Stack>
  );
}
