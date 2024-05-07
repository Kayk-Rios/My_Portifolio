import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main:'#4ff8e3e',
      },
     
    }, 
  typography:{
    fontFamily:'Segoe UI'
  }
  });
  theme = responsiveFontSizes(theme)
  export default theme