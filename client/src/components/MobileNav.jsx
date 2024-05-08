import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NavLinks from "../data/NavLinks";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
  const [value, setValue] = React.useState(0);
  const redirect = useNavigate()
  return (
    <Paper
      sx={{position: "fixed", bottom: 0, left: 0, right: 0, display:{"xs":"flex","sm":"none"} , overflowX:"scroll"}}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          margin:"auto",
          "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
            color: "#757575"
          },
          "& .Mui-selected": {
            "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
              color: "black"
            },
          },
        }}
      >
        {NavLinks().map(({ name, Icon , link },index) => {
          return <BottomNavigationAction value={index} label={name} icon={Icon} onClick={()=>redirect(link)}/>;
        })}
      </BottomNavigation>
    </Paper>
  );
}
