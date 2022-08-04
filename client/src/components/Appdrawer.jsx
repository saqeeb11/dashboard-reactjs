import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Drawer, Avatar, List } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { response } from "./Login";
import { Link } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";

export default function Appdrawer(props) {
  const userName = response;
  const drawerWidth = 240;
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            {props.title}
          </Typography>
          <Tooltip title="profile">
            <Link to="/home/profile" style={{ textDecoration: "none" }}>
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 50,
                  height: 50,
                  fontSize: 25,
                }}
              >
                {userName[0].toUpperCase()}
              </Avatar>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <h1
            className="profile-heading"
            style={{ margin: "auto", fontSize: "22px" }}
          >
            {userName}
          </h1>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemText>
                <Link
                  to="/home"
                  style={{
                    padding: "10px 20px",
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  home
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemText>
                <Link
                  to="/home/dashboard"
                  style={{
                    padding: "10px 20px",
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  Dashbord
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemText>
                <Link
                  to="/home/settings"
                  style={{
                    padding: "10px 20px",
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  settings
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemText>
                <Link
                  to="/home/about"
                  style={{
                    padding: "10px 20px",
                    color: "black",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  About
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
