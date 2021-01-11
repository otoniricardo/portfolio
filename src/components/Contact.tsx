import React from 'react';

import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

import NavBar from './NavBar';

const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: '100vh',
    background: '#233',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },

  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
})(TextField);

export default function Contact(): JSX.Element {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: 'tomato',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            hire or contact me...
          </Typography>
          <InputField
            fullWidth
            variant="outlined"
            label="Name"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: 'white' } }}
          />
          <br />
          <InputField
            fullWidth
            variant="outlined"
            label="Email"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: 'white' } }}
          />
          <br />
          <InputField
            fullWidth
            variant="outlined"
            label="Company name"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: 'white' } }}
          />
          <br />
          <Button
            variant="outlined"
            fullWidth
            endIcon={<SendIcon />}
            className={classes.button}
          >
            contact
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
