import { useState, createContext, useContext } from "react";

const ChatContext = createContext();
export const useChatContext = () => useContext(ChatContext);

export function ChatContextProvider({ children }) {
  //   structure of our data. Using id we can grab the data
  //     {
  //     id:{
  //         user:"",
  //         bot:""
  //     }
  //   }
  const [chat, setChat] = useState({});

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
}
