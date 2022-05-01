import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

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

  return (
    <>
      <div className={classes.main}>
        <Typography className={classes.title}>Romanov weather API</Typography>
      </div>
    </>
  );
};

export default Landing;
