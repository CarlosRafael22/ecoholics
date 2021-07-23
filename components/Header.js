import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Typography from '@material-ui/core/Typography';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1, 2)
    }
  }
}, { name: 'Header' });

const Header = (props) => {
  const classes = useStyles();
  const { isGreenTheme, toggleTheme } = props;

  return (
    <>
      <Paper square className={classes.root}>

        <Grid container spacing={2}>
          <Grid item md={4}>
          <img src={isGreenTheme ? '/green.svg' : '/blue.svg'} alt="Vercel Logo" className="h-4 ml-2" />
          {/* <AcUnitIcon color="primary" />
            <Typography variant="h6" color="primary"><strong>Ecoholics</strong></Typography> */}
          </Grid>
          <Grid item md={8}></Grid>
          <Grid item md={4}>
            <TextField defaultValue="Majorca, Spain" fullWidth variant="outlined" />
          </Grid>
          <Grid item md={2}>
            <TextField label="Check in" defaultValue="Sat, 28/07" fullWidth variant="outlined" />
          </Grid>
          <Grid item md={2}>
            <TextField label="Check out" defaultValue="Sat, 30/07" fullWidth variant="outlined" />
          </Grid>
          <Grid item md={2}>
            <TextField select value="4" variant="outlined">
              <MenuItem value="4">
                4 People
            </MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <br/>
        <FormControlLabel
          control={
            <Switch
              checked={isGreenTheme}
              onChange={toggleTheme}
              color="primary"
            />
          }
          label="Eco search"
        />
      </Paper>
    </>
  );
};

export default Header;
