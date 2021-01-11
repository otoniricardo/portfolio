/* eslint-disable no-multi-assign */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from '@material-ui/core';

import { makeStyles, Theme } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';

import avatar from '../assets/avatar.png';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    path: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    path: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    path: '/portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    path: '/contact',
  },
];

export default function NavBar(): JSX.Element {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toogleSlider = (slider: string, open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider: string) => (
    <Box
      onClick={toogleSlider(slider, false)}
      component="div"
      className={classes.menuSliderContainer}
    >
      <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem button key={item.listText} component={Link} to={item.path}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toogleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography style={{ color: 'tan' }} variant="h5">
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              onClose={toogleSlider('right', false)}
              open={state.right}
              anchor="right"
              keepMounted
            >
              {sideList('right')}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
