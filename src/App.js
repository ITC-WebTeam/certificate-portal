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
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';




function App() {

  const [soc, setsoc] = useState(false);
  const [itsp, setitsp] = useState(false);
  const [sos, setsos] = useState(false);
  const [ksp, setksp] = useState(false);

  function valueChange(e) {
    if (e) {
      setsoc(false)
      setsos(false)
      setitsp(false)
      setksp(false)
    }
    if (e.target.outerText === "Summer of Code(SoC)") {
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
  }

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            // sx={{ mr: 2 }}
            >
              {/* <a className='navbarbrand'><img src="./assets/itc.jpg" alt="Image Load Error" width="70" height="45"></a> */}
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Certificate Portal
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
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
        </div>
      </div>

      <div className='footer'>
        Developed by Web Team | Institute Technical Council with <FavoriteIcon sx={{ color: red[700] }} fontSize="small" />
      </div>

    </>
  );
}

export default App;
