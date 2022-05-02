import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'white'
  },
  title: {
    fontSize: '62px',
    display: 'flex',
    justifyContent: 'center'
  }
}));



const Landing = () => {
  const classes = useStyles();
  // gettingWeather = async() => {
  //   const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${process.env.API_KEY}`);
  //   const data = await api_url.json();
  //   console.log(data);
  // }
  

  return (
    <>
      <div className={classes.main}>
        <Typography className={classes.title}>Romanov weather API</Typography>
      </div>
    </>
  );
};


export default Landing;
