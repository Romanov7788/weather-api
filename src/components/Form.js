import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Weather from "./Weather";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "yellow",
  },
  title: {
    fontSize: "50px",
    display: "flex",
    justifyContent: "center",
  },
}));

function Form() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL1 = process.env.REACT_APP_API_URL1;

  const classes = useStyles();

  const [city, setCity] = useState();

  const [weather, setWeather] = useState();


  async function weatherData(e) {
    e.preventDefault();
    if (city === "") {
      alert("ВВЕДИТЕ ГОРОД");
    } else {
      fetch(`${API_URL1}weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => setWeather(data));
    }
  }

  const handleChange = (e) => setCity(e.target.value);

  return (
    <div className={classes.main}>
      <Typography className={classes.title}>Погода</Typography>

      <div>
        <form>
          <center>
            <input
              className="title"
              type="text"
              name="city"
              placeholder="Например Харьков"
              onChange={(e) => handleChange(e)}
            />
          </center>
          <center>
            <button onClick={(e) => weatherData(e)}>
              Поиск
            </button>
          </center>
        </form>
        <br />
      </div>
      {weather != undefined ? (
        <div>
          <Weather weather={weather} />
        </div>
      ) : null}
    </div>
  );
}

export default Form;
