import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#243e36',
      },
      secondary: {
        main:'#95CCAA',
      },
     
    }, 
  typography:{
    fontFamily:'Segoe UI'
  }
  });
  theme = responsiveFontSizes(theme)
  export default theme