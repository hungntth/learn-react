import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, TextField } from '@material-ui/core';
import Register from 'featrues/Auth/components/Register';
import { Close } from '@material-ui/icons';

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
    position:'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  }
}));

export default function Header(disableBackdropClick,disableEscapeKeyDown) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (disableBackdropClick && reason === "backdropClick") {
      return false;
    }

    if (disableEscapeKeyDown && reason === "escapeKeyDown") {
      return false;
    }

    if (typeof setOpen === "function") {
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

          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog disableEscapeKeyDown 
      // disableBackdropClick='true' 
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <Register closeDialog={handleClose}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
