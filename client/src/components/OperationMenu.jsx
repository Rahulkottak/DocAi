import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useFileContext } from "../context/FileContextProvider";
import { useDialogContext } from "../context/DialogContextProvider";
import { useParams } from "react-router-dom";

export default function OperationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { filename } = useFileContext();
  const { handleClickOpen, setId } = useDialogContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const share = () => {
    console.log("running");
    console.log(navigator.share);
    if (navigator.share) {
      navigator
        .share({
          title: filename,
          text: "Checkout my doc " + filename,
          url: window.location.href,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
    handleClose();
  };

  const publish = () => {
    handleClickOpen();
    handleClose();
  };

  const { id } = useParams();

  setId(id);

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          justifyContent: "flex-start",
          margin: 0,
          padding: 0,
          fontWeight: "bold",
        }}
      >
        Share
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={publish}>Publish</MenuItem>
        <MenuItem onClick={share}>Share Link</MenuItem>
      </Menu>
    </div>
  );
}
