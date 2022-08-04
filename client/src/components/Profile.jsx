import React from "react";
import Appdrawer from "./Appdrawer";
import { Box, Avatar, Toolbar, List } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { response } from "./Login";

export default function Profile() {
  const userName = response;

  return (
    <>
      <Appdrawer title="Profile" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar></Toolbar>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 100,
              height: 100,
              fontSize: 35,
            }}
          >
            {userName[0].toUpperCase()}
          </Avatar>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>{userName}</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Info</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Password</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
