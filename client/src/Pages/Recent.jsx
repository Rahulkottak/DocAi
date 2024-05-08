import React from "react";
import { getStorage } from "../utils/storage";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Recent() {
  const recent = getStorage();
  return (
    <Stack paddingY={2} paddingX={4}>
      {!recent || recent.length === 0 ? (
        <Typography fontSize="2rem" marginTop="3rem" fontWeight="bold">
          No recents
        </Typography>
      ) : (
        <List>
          <ListItem>
            <Typography fontSize="2rem" fontWeight="bold">
              Recents
            </Typography>
          </ListItem>
          {recent.reverse()?.map((link) => {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <Typography
                  component="a"
                  fontWeight="medium"
                  href={link.substring(1, link.length - 1)}
                  sx={{
                    cursor: "pointer", textDecoration:"none",color:"black",
                    "&:hover": { color: "gray" },
                    wordBreak: "break-all",
                  }}
                >
                  {link.substring(1, link.length - 1)}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      )}
    </Stack>
  );
}
