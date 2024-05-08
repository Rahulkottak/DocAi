
import Stack from "@mui/material/Stack";

import ChatBox from "../components/ChatBox";
import ChatContainer from "../components/ChatContainer";

export default function Chat() {
  return (
    <Stack sx={{ width: "100%",padding:2, alignItems: "center",height:{xs:"85vh",sm:"90vh"},gap:2 }}>
      <ChatContainer/>
      <ChatBox/>
    </Stack>
  );
}
