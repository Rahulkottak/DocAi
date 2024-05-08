import { useState, createContext, useContext } from "react";

const FileContext = createContext();
export const useFileContext = () => useContext(FileContext);

// it can be used by text editor to send changes the directly along with the delta
export function FileContextProvider({ children }) {
  const [filename, setFilename] = useState("");

  return (
    <FileContext.Provider value={{filename, setFilename}}>
      {children}
    </FileContext.Provider>
  );
}