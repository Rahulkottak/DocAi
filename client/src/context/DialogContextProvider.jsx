import { useContext, createContext, useEffect, useState } from "react";

const DialogContext = createContext();
export const useDialogContext = () => useContext(DialogContext);

export default function DialogContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [id,setId] = useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider
      value={{ open, setOpen, handleClickOpen, handleClose ,id,setId}}
    >
      {children}
    </DialogContext.Provider>
  );
}
