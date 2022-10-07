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
import Con101 from './MyComponents/certificate/NTSS/con101';
import Manage from './MyComponents/certificate/NTSS/manage';
import Bigdata from './MyComponents/certificate/NTSS/bigdata';
import Finance from './MyComponents/certificate/NTSS/finance';
import Game from './MyComponents/certificate/NTSS/game';
import Tinkering from './MyComponents/certificate/TSS/tinkering';
import Aerial from './MyComponents/certificate/TSS/aerial';
import Blockchain from './MyComponents/certificate/TSS/blockchain';
import Controls from './MyComponents/certificate/TSS/controls';
import Energy from './MyComponents/certificate/TSS/energy';
import Global  from './MyComponents/certificate/TSS/global';
import Latex from './MyComponents/certificate/TSS/latex';
import Web from './MyComponents/certificate/TSS/web';

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
  const [tinker, settinker] = useState(false);
  const [con, setcon] = useState(false);
  const [big, setbig] = useState(false);
  const [finance, setfinance] = useState(false);
  const [game, setgame] = useState(false);
  const [manage, setmanage] = useState(false);
  const [aerial, setaerial] = useState(false);
  const [controls, setcontrols] = useState(false);
  const [energy, setenergy] = useState(false);
  const [global, setglobal] = useState(false);
  const [block, setblock] = useState(false);
  const [web, setweb] = useState(false);
  const [latex, setlatex] = useState(false);
  // const [global, setglobal] = useState(false);
  // const [learners, setlearners] = useState(false);

  function valueChange(e) {
    console.log(global)
    if (e) {
      setsoc(false)
      setsos(false)
      setitsp(false)
      setksp(false)
      setxlr8(false)
      settinker(false)
      setaerial(false)
      setbig(false)
      setblock(false)
      setglobal(false)
      setcon(false)
      setcontrols(false)
      setenergy(false)
      setfinance(false)
      setgame(false)
      setlatex(false)
      setweb(false)
      setmanage(false)
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
    else if (e.target.outerText === "Tinkering Bootcamp"){
      settinker(true);
    }else if (e.target.outerText === "LATEX"){
      setlatex(true);
    }else if (e.target.outerText === "Introduction to Web-Development"){
      setweb(true);
    }else if (e.target.outerText === "Introduction to Blockchain"){
      setblock(true);
    }
    else if (e.target.outerText === "Global Strategy"){

      setglobal(true);

    }
    else if (e.target.outerText === "Fundamentals of Energy-Foundation"){
      setenergy(true);
    }else if (e.target.outerText === "Controls Theory"){
      setcontrols(true);
    }else if (e.target.outerText === "Aerial Robotics"){
      setaerial(true);
    }else if (e.target.outerText === "Big Data Handling"){
      setbig(true);
    }else if (e.target.outerText === "Management Bootcamp"){
      setmanage(true);
    }else if (e.target.outerText === "Game Theory"){
      setgame(true);
    }else if (e.target.outerText === "Entering Financial Markets"){
      setfinance(true);
    }else if (e.target.outerText === "Consulting-101"){
      setcon(true);
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
          {/* {learners ?
          (<Learners />) : (<></>)
          } */}
          {con ?
          (<Con101 />) : (<></>)
          }
          {manage ?
          (<Manage />) : (<></>)
          }
          {big ?
          (<Bigdata />) : (<></>)
          }
          {finance ?
          (<Finance />) : (<></>)
          }
          {game ?
          (<Game />) : (<></>)
          }
          {tinker ?
          (<Tinkering />) : (<></>)
          }
          {aerial ?
          (<Aerial />) : (<></>)
          }
          {block ?
          (<Blockchain />) : (<></>)
          }
          {controls ?
          (<Controls />) : (<></>)
          }
          {energy ?
          (<Energy />) : (<></>)
          }
          {global ?
          (<Global />) : (<></>)
          }
          {latex ?
          (<Latex />) : (<></>)
          }
          {web ?
          (<Web />) : (<></>)
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