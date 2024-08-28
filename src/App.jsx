import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

import { CssBaseline, Typography } from '@mui/material'

function App() {

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Typography variant='h5'>Hello from React + Vite + Material UI v6 🚀</Typography>
    </ThemeProvider>
  )
}

export default App
