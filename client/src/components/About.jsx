import React from "react";
import { Box, Toolbar, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Appdrawer from "./Appdrawer";

export default function About() {
  return (
    <>
      <Appdrawer title="About" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>version 1.0.0</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>author: saqeeb</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>license: ISC</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
