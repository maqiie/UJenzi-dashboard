import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu for mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#fff" }}>
        Navbar
      </Typography>
      <Divider sx={{ bgcolor: "#444" }} />
      <List>
        <ListItem button sx={{ color: "#fff" }}>
          <HomeIcon />
          <ListItemText sx={{ ml: 2 }} primary="Home" />
        </ListItem>
        <ListItem button sx={{ color: "#fff" }}>
          <InfoIcon />
          <ListItemText sx={{ ml: 2 }} primary="About" />
        </ListItem>
        <ListItem button sx={{ color: "#fff" }}>
          <ListItemText sx={{ ml: 2 }} primary="Services" />
        </ListItem>
        <ListItem button sx={{ color: "#fff" }}>
          <ListItemText sx={{ ml: 2 }} primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#333", top: 0, left: 0, right: 0, zIndex: 1200 }}>
        <Toolbar>
          {/* Menu button for mobile view */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navbar Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "#fff" }}
          >
            Navbar
          </Typography>

          {/* Links for Desktop */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <HomeIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <InfoIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ mr: 2 }}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>

          {/* Drawer for Mobile */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240, backgroundColor: "#333", color: "#fff" },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
