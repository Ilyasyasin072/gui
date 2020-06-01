import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  setButton: {
    margin: theme.spacing(1),
  },
}));

export default function Apps() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [value, setValue] = React.useState(0);

  const history = useHistory();
  const landing = () => history.push("/");
  const about = () => history.push("/about");
  const portofolio = () => history.push("/portofolio");
  // const dashboard = () => history.push("/dashboard");

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="login">Sign in</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="register">Sign in</Link>Sign Up
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {/* <img
              src={logo}
              alt
              style={{ width: "22px", height: "22px", marginRight: "5px" }}
            /> */}
            My Portofolio
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.setButton}>
              <Link to="/" className="inherit" style={{}}>
                <Button style={{ color: "white" }}>Landing</Button>
              </Link>
            </div>
            {/* <div className={classes.setButton}>
              <Link to="/" style={{}}>
                <Button style={{ color: "white" }}>Dashboard</Button>
              </Link>
            </div> */}
            <div className={classes.setButton}>
              <Link to="portofolio" className="inherit" style={{}}>
                <Button style={{ color: "white" }}>Portofolio</Button>
              </Link>
            </div>
            <div className={classes.setButton}>
              <Link to="about" className="inherit" style={{}}>
                <Button style={{ color: "white" }}>About</Button>
              </Link>
            </div>

            {/* <div className={classes.setButton}>
              <Link to="login" className="inherit" style={{}}>
                <Button style={{ color: "white" }}>Sign in</Button>
              </Link>
            </div> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <BottomNavigation
              style={{
                width: "100%",
                overflow: "hidden",
                position: "fixed",
                bottom: 0,
                left: 0,
              }}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}
            >
              <BottomNavigationAction
                label="Dashboard"
                onClick={landing}
                icon={<RestoreIcon />}
              />
              <BottomNavigationAction
                label="About"
                onClick={about}
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Portopolio"
                onClick={portofolio}
                icon={<LocationOnIcon />}
              />
              {/* <BottomNavigationAction
                label="dashboard"
                onClick={dashboard}
                icon={<LocationOnIcon />}
              /> */}
            </BottomNavigation>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
