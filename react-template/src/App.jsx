import { useState } from 'react'
import './App.css'
import { Template } from './components/Template'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ThemeProvider theme={createTheme}>
      <Template />
      <h1>Test</h1>
    </ThemeProvider>
    </div>

  )
}

export default App
