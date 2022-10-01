import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { mentee } from "../../assets/mentee";
import { soc_mentee } from "../../assets/soc-mentee";
import { soc_mentor } from "../../assets/soc-mentor";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { saveAs } from "file-saver";
import './soc.css'

export default function SoC() {
  var type;
  const [ismentee, setmentee] = useState(false);
  const [ismentor, setmentor] = useState(false);
  const [isselected, setselect] = useState(false);
  const [isdouble, setdouble] = useState(false);

  const mentordual = [
    "Bhavesh Patil",
    "Dhananjay Kejriwal",
    "Shivprasad Kathane",
    "Yash Saraogi",
    "Yash Shah",
  ];

  const downloadfile = async () => {
    var key = 0;
    if (ismentee) {
      var mentee = document.getElementById("mentee").value;
      key = mentee.replace(/\s+/g, "%20");
      const link = `${window.location.href}certificates/Certificates_SoC/${key}.png`;
      await saveAs(link, "soc-certificate.png");
    } else if (ismentor) {
      var mentor = document.getElementById("mentor").value;
      key = mentor.replace(/\s+/g, "%20");
      const link = `${window.location.href}certificates/Certificates_SoC_Mentor/${key}.png`;
      await saveAs(link, "soc-certificate_mentor.png");
    }

    // const links = ["completion", "Mentors", "Merit", "Special_Mention"];
    // var filename = `itsp-${links}.png`
  };

  const downloadfile1 = async () => {
    var key = 0;
    if (ismentee) {
      var mentee = document.getElementById("mentee").value;
      key = mentee.replace(/\s+/g, "%20");
      const link = `${window.location.href}certificates/Certificates_SoC/${key}.png`;
      await saveAs(link, "soc-certificate.png");
    } else if (ismentor) {
      var mentor = document.getElementById("mentor").value;
      key = mentor.replace(/\s+/g, "%20");
      const link = `${window.location.href}certificates/SoCDouble/${key}.png`;
      await saveAs(link, "soc-certificate_mentor(1).png");
    }

    // const links = ["completion", "Mentors", "Merit", "Special_Mention"];
    // var filename = `itsp-${links}.png`
  };

  const handleChange = (e) => {
    if (e) {
      setmentee(false);
      setmentor(false);
      setselect(false);
    }
    if (e.target.value === 10) {
      setmentee(true);
      setselect(false);
    }
    if (e.target.value === 20) {
      setmentor(true);
      setselect(false);
    }
  };

  const valueChange = (event) => {
    for (let i = 0; i < mentordual.length; i++) {
      if (event.target.textContent === "") {
        setselect(false);
        setdouble(false);
        break;
      } else if (event.target.textContent === mentordual[i]) {
        setdouble(true);
        setselect(false);
        break;
      } else {
        setselect(true);
        setdouble(false);
      }

      // if (event.target.textContent === mentordual[i]) {
      //   setdouble(true);
      //   break;
      // } else {
      //   setdouble(false);
      //   break;
      // }
    }
  };

  return (
    <div>
      <div className="Selected">
        <FormControl className="form">
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
        <div className="card2" id="participant">
          <Autocomplete
            id="mentee"
            className="p-5"
            options={soc_mentee}
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
        <div className="card2" id="participant">
          <Autocomplete
            id="mentor"
            className="p-5"
            options={soc_mentor}
            getOptionLabel={(option) => option.Name}
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
      {isselected ? (
        <div className="button">
          <button className="btn" onClick={downloadfile}>
            Download
          </button>
        </div>
      ) : (
        <></>
      )}
      {isdouble ? (<div className="button1">
          <button className="btn1" onClick={downloadfile}>
            Download1
          </button>
          <button className="btn2" onClick={downloadfile1}>
            Download 2
          </button>
          <p>You have two certificates to Download</p>
        </div>
        ):(<></>)}
    </div>
  );
}
