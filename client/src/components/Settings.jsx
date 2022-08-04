import React from "react";
import Axios from "axios";
import { Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Appdrawer from "./Appdrawer";

export default function Settings() {
  const navigate = useNavigate();

  const logout = () => {
    Axios.get("http://localhost:88/logout").then((result) => {
      navigate("/login");
    });
  };
  return (
    <>
      <Appdrawer title="Settings" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
