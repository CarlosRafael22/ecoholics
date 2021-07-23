import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    }
  },
});

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff'
    }
  },
});
