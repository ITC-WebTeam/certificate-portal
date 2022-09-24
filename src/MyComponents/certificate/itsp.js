import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { mentee } from "../../assets/mentee";
import { mentor } from "../../assets/mentor";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { saveAs } from "file-saver";
import { completion } from "../../assets/itsp-completion";

export default function ITSP() {
  var type;
  const [ismentee, setmentee] = useState(false);
  const [ismentor, setmentor] = useState(false);
  const [isselected, setselect] = useState(false);

  // var mentee = document.getElementById("mentee").value;
  // var mentor = document.getElementById("mentor").value;

  // console.log(`${window.location.href}certificates/completion${key}.png`);

  const downloadfile = async () => {
    var key = 0;
    if (ismentee) {
      var mentee = document.getElementById("mentee").value;
      key = mentee.replace(/\s+/g, "%20");
    } else if (ismentor) {
      var mentor = document.getElementById("mentor").value;
      key = mentor;
    }

    const links = ["completion", "Mentors", "Merit", "Special_Mention"];
    var filename = `itsp-${links}.png`
    const link = `${window.location.href}certificates/${links}/${key}.png`;
    await saveAs(link, filename);
  };

  const handleChange = (e) => {
    if (e) {
      setmentee(false);
      setmentor(false);
    }
    if (e.target.value === 10) {
      setmentee(true);
    }
    if (e.target.value === 20) {
      setmentor(true);
    }
  };

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
      <div>
        <FormControl fullWidth>
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
        </FormControl>
      </div>
      {ismentee ? (
        <div className="card" id="participant">
          <Autocomplete
            id="mentee"
            className="pt-5"
            options={completion}
            getOptionLabel={(option) => option.Name}
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
      {ismentor ? (
        <div className="card" id="participant">
          <Autocomplete
            id="mentor"
            className="pt-5"
            options={mentor}
            getOptionLabel={(option) => option.name}
            onChange={(e) => {
              valueChange(e);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mentor" />}
          />
        </div>
      ) : (
        <></>
      )}
      {isselected ? <button onClick={downloadfile}>Download</button> : <></>}
    </div>
  );
}
