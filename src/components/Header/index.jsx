import { Avatar, Box, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Login from 'featrues/Auth/components/Login';
import Register from 'featrues/Auth/components/Register';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header(disableBackdropClick, disableEscapeKeyDown) {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn =!!loggedInUser.id;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (disableBackdropClick && reason === 'backdropClick') {
      return false;
    }

    if (disableEscapeKeyDown && reason === 'escapeKeyDown') {
      return false;
    }

    if (typeof setOpen === 'function') {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AllInclusiveIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              UShop
            </Link>
          </Typography>

          <NavLink to="/todos" className={classes.link}>
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink to="/albums" className={classes.link}>
            <Button color="inherit">Albums</Button>
          </NavLink>
          {!isLoggedIn &&(
            <Button color="inherit" onClick={handleClickOpen}>
            Login
          </Button>
          )}

          {isLoggedIn &&(
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          )}
          
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        // disableBackdropClick='true'
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Already have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
