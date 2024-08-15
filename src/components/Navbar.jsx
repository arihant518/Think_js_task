import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LayersIcon from "@mui/icons-material/Layers";
import "../Common.css";
import { InputBase, styled, alpha } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const pages = [
  { name: "Home", icon: <HomeIcon sx={{ width: 16, height: 16 }} /> },
  {
    name: "Inventory",
    icon: <InventoryIcon sx={{ width: 16, height: 16 }} />,
    backgroundColor: "#DDF2D1",
  },
  { name: "Layers", icon: <LayersIcon sx={{ width: 16, height: 16 }} /> },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              color: "#004900 !important",
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black !important" }}
                  >
                    {page.icon} {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "black !important",
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  height: "30px !important",
                  ...(page.name === "Inventory" && {
                    backgroundColor: page.backgroundColor,
                    borderRadius: "5px",
                  }),
                }}
              >
                <span style={{ marginRight: "12px", marginTop: "4px" }}>
                  {page.icon}
                </span>{" "}
                {page.name}
              </Button>
            ))}
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Quick Action"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "black" }}
            />
          </Search>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Box
              sx={{
                height: "30px",
                width: "30px",
                border: "1px solid #bbbbbb",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <QuestionMarkIcon
                sx={{ height: "16px", width: "16px", color: "black" }}
              />
            </Box>
            <Box
              sx={{
                height: "30px",
                width: "30px",
                border: "1px solid #bbbbbb",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <NotificationsActiveIcon
                sx={{ height: "16px", width: "16px", color: "black" }}
              />
              {/* Green Dot */}
              <Box
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  height: "10px",
                  width: "10px",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  border: "1px solid white",
                }}
              />
            </Box>
            <Box
              sx={{
                height: "30px",
                width: "150px",
                border: "1px solid #bbbbbb",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 8px", // Add padding for spacing
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  marginRight: "8px", // Add margin between text and icon
                }}
              >
                Don Maggio
              </Typography>
              <PermIdentityIcon
                sx={{ height: "20px", width: "20px", color: "black" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
