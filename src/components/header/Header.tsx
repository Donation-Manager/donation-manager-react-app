import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));


const Header = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [menuState, setMenuState] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuState(true);
  }

  const handleMenuClose = () => {
    setMenuState(false);
  }

  return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={handleMenuOpen} edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Donation Manager
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={menuState}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleMenuClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
        <Link to="/">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      <Divider />
      <Link to="/donationNeedCreation">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Cadastro de Intenções" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/donationIntentions">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Intenções" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/donations">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Doações" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/donationsNeeds">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Necessidades de Doações" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/donationNeedCreation">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Cadastro de Necessidade" />
        </ListItem>
      </Link>
      <Divider />
      <Link to="/stock">
        <ListItem button onClick={() => {setMenuState(false);}}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Estoque" />
        </ListItem>
      </Link>
      <Divider />
    </Drawer>
    </div>

  );
}

export default Header;
