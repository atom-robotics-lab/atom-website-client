"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Blogs", "Achievements", "Projects"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        position: "fixed",
        zIndex: 9999999,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "700",
            }}
          >
            A.T.O.M ROBOTCS LAB{" "}
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      fontWeight: "bold",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: 0,
                        left: "50%",
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                        left: "0%",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    ml: 2,
                    fontWeight: "bold",
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </>
          )}
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            height: "auto",
            backgroundColor: "blue",
          },
        }}
        anchor="top"
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
