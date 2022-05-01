import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from './components/Landing/Landing';

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

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
