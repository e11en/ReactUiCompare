import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#FFF",
  },
}));

const HeaderComponent = ({ onMenuClick }: any) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const onAccountClick = (event: any) => setAnchorEl(event.currentTarget);
  const onAccountClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Real life
        </Typography>
        <IconButton
          color="inherit"
          aria-label="account"
          onClick={onAccountClick}
        >
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onAccountClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={onAccountClose}>Account</MenuItem>
          <MenuItem onClick={onAccountClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
