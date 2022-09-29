import "./App.css";
import * as React from "react";
import { useState } from "react";
import events from "./assets/events.js";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SoC from "./MyComponents/certificate/soc";
import ITSP from "./MyComponents/certificate/itsp";
import KSP from "./MyComponents/certificate/ksp";
import SoS from "./MyComponents/certificate/sos";
import Footer from "./MyComponents/Footer";
import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [soc, setsoc] = useState(false);
  const [itsp, setitsp] = useState(false);
  const [sos, setsos] = useState(false);
  const [ksp, setksp] = useState(false);

  function valueChange(e) {
    if (e) {
      setsoc(false);
      setsos(false);
      setitsp(false);
      setksp(false);
    }
    if (e.target.outerText === "Summer of Code(SoC)") {
      setsoc(true);
    } else if (e.target.outerText === "Summer of Science(SoS)") {
      setsos(true);
    } else if (
      e.target.outerText === "Institute Technical Summer Project(ITSP)"
    ) {
      setitsp(true);
    } else if (e.target.outerText === "Krittika Summer Project(KSP)") {
      setksp(true);
    }
  }

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Certificate Portal
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="card">
        <Autocomplete
          id="events"
          className="pt-5"
          options={events}
          onChange={(e) => {
            valueChange(e);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Events" />}
        />
      </div>
      <div className="wrapper text-center">
        {soc ? <SoC /> : <></>}
        {itsp ? <ITSP /> : <></>}
        {sos ? <SoS /> : <></>}
        {ksp ? <KSP /> : <></>}
      </div>
      <div className="foo">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
