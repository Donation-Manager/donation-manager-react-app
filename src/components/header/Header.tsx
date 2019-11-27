import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AddIcon from '@material-ui/icons/Add';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
  },
  link: {
    textDecoration: 'none'
  }
}));


const Header = () => {
  const classes = useStyles();

  const [menuState, setMenuState] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuState(true);
  }

  const handleMenuClose = () => {
    setMenuState(false);
  }


const isManager = true;

  if (isManager) {
    return (
      <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton onClick={handleMenuOpen} edge="start" color="default" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography color="textPrimary" variant="h6" className={classes.title}>
            Donation Manager
          </Typography>
          <Button color="default" endIcon={<VpnKeyIcon/>}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        color="primary"
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
            {menuState ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <Link className={classes.link}  to="/">
            <ListItem color="primary" button onClick={() => {setMenuState(false);}}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Home" />
            </ListItem>
          </Link>
        <Divider />
        <Link className={classes.link} to="/donationIntentions">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><FavoriteBorder /></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Intenções" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={classes.link} to="/donations">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><InsertEmoticonIcon /></ListItemIcon>
            <ListItemText color="primary" primaryTypographyProps={{color: "textPrimary"}} primary="Doações" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={classes.link} to="/donationNeedCreation">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><ListItemIcon><div><EmojiPeopleIcon /><AddIcon style={{marginLeft: -10, marginBottom: -10}}/></div></ListItemIcon></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Cadastro de Necessidade" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={classes.link} to="/donationsNeeds">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Necessidades de Doações" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={classes.link} to="/stock">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><ListAltIcon /></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Estoque" />
          </ListItem>
        </Link>
        <Divider />
      </Drawer>
      </div>

    );
  } else {
    return (
      <div>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton onClick={handleMenuOpen} edge="start" color="default" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography color="textPrimary" variant="h6" className={classes.title}>
            Donation Manager
          </Typography>
          <Button color="default" endIcon={<VpnKeyIcon/>}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        color="primary"
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
            {menuState ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <Link className={classes.link}  to="/">
            <ListItem color="primary" button onClick={() => {setMenuState(false);}}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Home" />
            </ListItem>
          </Link>
        <Divider />
        <Link className={classes.link} to="/donationIntentionCreation">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><div><FavoriteBorder /><AddIcon style={{marginLeft: -10, marginBottom: -10}} /></div></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Cadastro de Intenções" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={classes.link} to="/donationsNeeds">
          <ListItem button onClick={() => {setMenuState(false);}}>
            <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
            <ListItemText primaryTypographyProps={{color: "textPrimary"}} primary="Necessidades de Doações" />
          </ListItem>
        </Link>
        <Divider />
      </Drawer>
      </div>

    );
  }
}

export default Header;
