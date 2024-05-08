import { createContext, useState , useContext , useEffect } from "react";

const SocketContext = createContext();

export const useSocketContext = ()=> useContext(SocketContext);

export default function SocketContextProvider({ children }) {

  const [socket, setSocket] = useState();

  return <SocketContext.Provider value={{socket,setSocket}}>{children}</SocketContext.Provider>;
}
