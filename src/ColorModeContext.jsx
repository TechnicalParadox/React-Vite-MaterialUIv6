import { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme'

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme), 
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext}