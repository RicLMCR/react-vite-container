
import './App.css'
import { Template } from './components/Template'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

function App() {

  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <h1>Containerised Vite Template</h1>
        <Template />
    </ThemeProvider>
    </div>

  )
}

export default App
