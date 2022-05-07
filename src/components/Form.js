import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Weather from './Weather';


const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: 'yellow'
    },
    title: {
      fontSize: '62px',
      display: 'flex',
      justifyContent: 'center'
    }
  }));
  


  function Form () {

    // спятал ключ
    const API_KEY = process.env.REACT_APP_API_KEY
  
    const classes = useStyles(); 
  
    const [form, setForm] = useState({
      city:""
    });
  
    const [weather, setWeather] = useState([])
  
    async function weatherData(e){
      e.preventDefault();
      if (form.city === "") {
        alert("ВВЕДИТЕ ГОРОД");
      } else {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${API_KEY}&units=metric`
          )
          .then((res) => res.json())
          .then((data) => data);
  
          setWeather(
            {
              data : data
            }
          );
      }
    }
  
    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      if (name === "city"){
        setForm({...form, city:value})
      }
    };
  
    return (
  
        <div className={classes.main}>
          <Typography className={classes.title}>Погода</Typography>
      
  
        <div>
          <form>
            <center>
          <input type="text" name="city" placeholder="Например Харьков" onChange={e => handleChange(e)}/>
            </center>
            <center>
          <button className="getweather" onClick={e => weatherData(e)}>Поиск</button>
            </center>
          </form>
              <br />
        </div>
            {weather.data !== undefined ? (
        <div>
            <Weather data={weather.data} />
          </div>
        ) : null}
      </div>
    );
  }
  
  
  export default Form;