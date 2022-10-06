// import "./bigdata.css"
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { saveAs } from "file-saver";
// import { completion } from "../../assets/itsp-completion";
// import { mentors } from "../../assets/itsp-mentors";
// import { xlr8_mentee } from "../../assets/xlr8-mentee"
import { energy_ment } from "../../../assets/energyment"

export default function Energy() {
  var type;
  const [ismentee, setmentee] = useState(true);
  // const [ismentor, setmentor] = useState(false);
  const [isselected, setselect] = useState(false);

  // var mentee = document.getElementById("mentee").value;
  // var mentor = document.getElementById("mentor").value;

  // console.log(`${window.location.href}certificates/completion${key}.png`);

  const downloadfile = async () => {
    var key = 0;
    var mentee = document.getElementById("mentee").value;
    key = mentee.replace(/\s+/g, "%20");
    const link = `${window.location.href}certificates/Energy/${key}.png`;
    await saveAs(link, "energy.png");
    // if (ismentee) {
    //   var mentee = document.getElementById("mentee").value;
    //   key = mentee.replace(/\s+/g, "%20");
    //   const link = `${window.location.href}certificates/completion/${key}.png`;
    //   await saveAs(link, "itsp-certificate.png");
    // } else if (ismentor) {
    //   var mentor = document.getElementById("mentor").value;
    //   key = mentor.replace(/\s+/g, "%20");
    //   const link = `${window.location.href}certificates/Mentors/${key}.png`;
    //   await saveAs(link, "itsp-certificate.mentor.png");
    // }

    // const links = ["completion", "Mentors", "Merit", "Special_Mention"];
    // var filename = `itsp-${links}.png`
    
  };

  // const handleChange = (e) => {
  //   if (e) {
  //     setmentee(false);
  //     setmentor(false);
  //     setselect(false);
  //   }
  //   if (e.target.value === 10) {
  //     setmentee(true);
  //     setselect(false);
  //   }
  //   if (e.target.value === 20) {
  //     setmentor(true);
  //     setselect(false);
  //   }
  // };

  const valueChange = (event) => {
    var key = event.target.textContent;
    if (event.target.textContent !== "") {
      setselect(true);
    } else {
      setselect(false);
    }
  };

  return (
    <div>
      {/* <div className="Selected"> */}
        {/* <FormControl className="form">
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="post"
            onChange={handleChange}
          >
            <MenuItem value={10} name="Mentee">
              Mentee
            </MenuItem>
            <MenuItem value={20} name="Mentor">
              Mentor
            </MenuItem>
          </Select>
        </FormControl> */}
      {/* </div> */}
      {ismentee ? (
        <div className="option" id="participant">
          <Autocomplete
            id="mentee"
            className="px-5 pt-2 pb-5"
            options={energy_ment}
            getOptionLabel={(option) => option.name}
            onChange={(e) => {
              valueChange(e);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mentee" />}
          />
        </div>
      ) : (
        <></>
      )}
      {/* {ismentor ? (
        <div className="option" id="participant">
          <Autocomplete
            id="mentor"
            className="p-5"
            options={mentors}
            getOptionLabel={(option) => option.Mentors}
            onChange={(e) => {
              valueChange(e);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mentor" />}
          />
        </div>
      ) : (
        <></>
      )} */}
      <div className="button">
        {isselected ? <button className="btn" onClick={downloadfile}>Download</button> : <></>}
      </div>
    </div>
  );
}
