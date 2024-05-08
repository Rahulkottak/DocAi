import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import NavLinks from "../data/NavLinks";
import { useNavigate , useLocation } from "react-router-dom";

export default function DrawerNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 200;
  const redirect = useNavigate()
  const {pathname} = useLocation()
  const drawer = (
    <div>
      <List>
        {NavLinks().map(({ name, Icon,link }, index) => {
          return (
            <>
              {index === NavLinks().length - 1 && <Divider />}
              <ListItem>
                <ListItemButton
                  selected={pathname===link} // set true when path and currentlink will be same
                  sx={{ gap: 2, borderRadius: 4 }}
                  onClick={()=>redirect(link)}
                >
                  {Icon}
                  <ListItemText
                    primary={name}
                    sx={{ color: "#515151", fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "static",
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
