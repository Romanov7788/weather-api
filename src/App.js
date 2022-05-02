import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from './components/Landing/Landing';
import Form from './components/Form';
import React from 'react';
import Weather from './components/Weather';

const API_KEY = "b33155410bb5168bd44ee883dc6eb26d";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lora',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif'
    ].join(',')
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 309,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  }
});

class App extends React.Component {

  state = {
    city: undefined,
    temp: undefined,
    pressure: undefined,
    speed: undefined
    
  }

  gettingWeather = async(e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
    

    this.setState({
      city: data.name,
      temp: data.main.temp,
      pressure: data.main.pressure,
      speed: data.wind.speed
    });
  
  }
  render() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Landing />
        <Form weatherMethod={this.gettingWeather} />
        <Weather         
        city={this.state.city}
        temp={this.state.temp}
        pressure={this.state.pressure}
        speed={this.state.speed}/>
      </ThemeProvider>
    </StyledEngineProvider>
  );
  }
 }


export default App;