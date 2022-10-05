import './App.css';
import * as React from 'react';
import { useState } from 'react';
import events from "./assets/events.js"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SoC from './MyComponents/certificate/soc';
import ITSP from './MyComponents/certificate/itsp';
import KSP from './MyComponents/certificate/ksp';
import SoS from './MyComponents/certificate/sos';
import XLR8 from './MyComponents/certificate/xlr8';
import Learners from './MyComponents/certificate/learners';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { createTheme,ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#032846',
    },
  },
});

function App() {

  const [soc, setsoc] = useState(false);
  const [itsp, setitsp] = useState(false);
  const [sos, setsos] = useState(false);
  const [ksp, setksp] = useState(false);
  const [xlr8, setxlr8] = useState(false);
  const [learners, setlearners] = useState(false);

  function valueChange(e) {
    if (e) {
      setsoc(false)
      setsos(false)
      setitsp(false)
      setksp(false)
      setxlr8(false)
      setlearners(false)
    }
    if (e.target.outerText === "Seasons of Code(SoC)") {
      setsoc(true);
    }
    else if (e.target.outerText === "Summer of Science(SoS)") {
      setsos(true);
    }
    else if (e.target.outerText === "Institute Technical Summer Project(ITSP)") {
      setitsp(true);
    }
    else if (e.target.outerText === "Krittika Summer Project(KSP)") {
      setksp(true);
    }
    else if (e.target.outerText === "XLR8") {
      setxlr8(true);
    }
    else if (e.target.outerText === "Learners' Space"){
      setlearners(true);
    }
  }

  return (
    <>
      <Box className='header'>
        <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Certificate Portal
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      </Box>

      <div className="body-main">
        <div className="card">
          <Autocomplete
            id="events"
            className="p-5"
            options={events}
            onChange={(e) => { valueChange(e) }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Events" />}
          />

          {soc ?
            (<SoC />) : (<>
            </>)
          }
          {itsp ?
            (<ITSP />) : (<>
            </>)
          }
          {sos ?
            (<SoS />) : (<>
            </>)
          }
          {ksp ?
            (<KSP />) : (<>
            </>)
          }
          {xlr8 ?
            (<XLR8 />) : (<>
            </>)
          }
          {learners ?
          (<Learners />) : (<></>)
          }
        </div>
      </div>

      <div className='footer'>
        Developed by Web Team | Institute Technical Council with <FavoriteIcon sx={{ color: red[700] }} fontSize="small" />
      </div>

    </>
  );
}

export default App;