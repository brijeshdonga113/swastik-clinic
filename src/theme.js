// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d7276',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9ec23c',
    },
    text: {
      primary: '#002d4c',
    },
    background: {
      default: '#f7fcfc',
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Segoe UI', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
