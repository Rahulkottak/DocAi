import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DrawerNav from "./components/DrawerNav";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { TextEditor } from "./Pages/TextEditor";
import MobileNav from "./components/MobileNav";
import Chat from "./Pages/Chat";
import { ChatContextProvider } from "./context/ChatContextProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import { FileContextProvider } from "./context/FileContextProvider";
import ImageSearch from "./Pages/ImageSearch";
import DialogContextProvider from "./context/DialogContextProvider";
import AddBlogForm from "./components/AddBlogForm";
import Blogs from "./Pages/Blogs";
import SingleBlog from "./Pages/SingleBlog";
import Recent from "./Pages/Recent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ display: "flex", marginTop: "4rem" }}>
        <CssBaseline />
        <DrawerNav />
        <DialogContextProvider>
          <SocketContextProvider>
            <FileContextProvider>
              <ChatContextProvider>
                <AddBlogForm/>
                <Routes>
                  <Route
                    path="/editor"
                    element={<Navigate to={`/document/${uuidv4()}`} />}
                  />
                  <Route path="/" element={<Chat />} />
                  <Route path="/recent" element={<Recent />} />
                  <Route path="/document/:id" element={<TextEditor />} />
                  <Route path="/images" element={<ImageSearch />} />
                  <Route path="/blog" element={<Blogs />} />
                  <Route path="/blog/:id" element={<SingleBlog />} />
                </Routes>
              </ChatContextProvider>
            </FileContextProvider>
          </SocketContextProvider>
        </DialogContextProvider>
      </Box>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
