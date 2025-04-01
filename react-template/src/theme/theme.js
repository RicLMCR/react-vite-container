import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme ({
    palette: {
        mode: "light",
        background:{
            default: "#faf0e6",
            paper: "#fff"
        },
        primary: {
          main: '#1976d2',
          light: '#42a5f5',
          dark: '#1565c0',
          contrastText: "#fff",
        }
      }
})