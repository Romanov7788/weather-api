import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'grey'
  },
  title: {
    fontSize: '62px',
    display: 'flex',
    justifyContent: 'center'
  }
}));

function Landing () {

  const classes = useStyles(); 

  return (

      <div className={classes.main}>
        <Typography className={classes.title}>Romanov weather API</Typography>
    </div>
  );
}


export default Landing;
