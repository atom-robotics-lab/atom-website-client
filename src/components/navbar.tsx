"use client";

import React, { useState, useEffect } from "react";
import {
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent | React.TouchEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Tab"
      ) {
        return;
      }
      setToggle(open);
    };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1300,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s",
        py: 1,
        px: isSmallScreen || isMediumScreen ? "1rem" : "6rem",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
        {/* Logo */}
        <Box component="img" src="/logo_1.jpg" alt="Logo" sx={{ height: 70 }} />

        {/* Navbar Links */}
        {isSmallScreen ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={toggleDrawer(true)}
              onTouchStart={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={toggle} onClose={toggleDrawer(false)}>
              <List>
                {[
                  "Home",
                  "About",
                  "Achievements",
                  "Projects",
                  "Blogs",
                  "Wiki",
                  "Download",
                ].map((text, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleNavigation(`/${text.toLowerCase()}`)}
                  >
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
                <ListItem
                  button
                  component="a"
                  href="https://linktr.ee/a.t.o.m_robotics_lab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ListItemText primary="Get in touch" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/home")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/about")}
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/achievements")}
            >
              Achievements
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/projects")}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/blogs")}
            >
              Blogs
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              href="https://atom-robotics-lab.github.io/wiki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wiki
            </Button>
            <Button
              color="inherit"
              sx={{ mx: 2 }}
              onClick={() => handleNavigation("/download")}
            >
              Download
            </Button>
            <Button
              color="inherit"
              sx={{
                mx: 2,
                borderRadius: "32px",
                background: "#0d47a1",
                color: "white",
                padding: "0.8rem 1rem",
              }}
              href="https://linktr.ee/a.t.o.m_robotics_lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </Button>
          </Box>
        )}
      </Toolbar>
    </Box>
  );
};

export default Navbar;

