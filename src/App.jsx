import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { CssBaseline, Typography, Button } from '@mui/material'

import { ColorModeContext } from './ColorModeContext';

function App() {
  const { toggleColorMode } =  useContext(ColorModeContext);

  return (
    <>
      <CssBaseline/>
      <Typography variant='h5'>Hello from React + Vite + Material UI v6 🚀</Typography>
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
    </>
  )
}

export default App
