import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import TableHeader from './components/TableHeader';
import { MuiDataTable } from './components/MuiDataTable';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004900',
    },
    secondary: {
      main: '#c0e4b1',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <----------- Navbar -----------> */}
      <Navbar />
      <Header />
      <TableHeader />

      {/* <--------use MUI data table for more functionality -----------> */}
      <MuiDataTable />
    </ThemeProvider>
  );
}

export default App;
