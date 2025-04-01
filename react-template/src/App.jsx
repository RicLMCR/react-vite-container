import { useState } from 'react'
import './App.css'
import { Template } from './components/Template'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Template />
    </ThemeProvider>
  )
}

export default App
