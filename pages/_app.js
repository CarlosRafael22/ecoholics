import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, greenTheme } from './theme';
import '@fontsource/roboto';
import { useState } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

function MyApp({ Component, pageProps }) {
  const [isGreenTheme, setIsGreenTheme] = useState(false);
  const toggleTheme = () => {
    setIsGreenTheme(!isGreenTheme);
  };

  return (
    <ThemeProvider theme={isGreenTheme ? greenTheme : lightTheme}>
      <FormControlLabel
        control={
          <Switch
            checked={isGreenTheme}
            onChange={toggleTheme}
            color="primary"
          />
        }
        label="Eco friendly"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
