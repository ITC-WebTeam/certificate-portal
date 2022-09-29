import "./sos.css"
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { list } from '../../assets/list';
import { mentor } from '../../assets/mentor';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { saveAs } from "file-saver";

export default function SoS() {

    var type;
    const [ismentee, setmentee] = useState(false);
    const [ismentor, setmentor] = useState(false);
    const [isselected, setselect] = useState(false);

    const downloadfile = async () => {
        var key = 0;
        if (ismentee) {
          var mentee = document.getElementById("mentee").value;
          key = mentee.replace(/\s+/g, "%20");
          const link = `${process.env.PUBLIC_URL}certificates/Certificates_SoS/${key}.png`;
          await saveAs(link, "sos-certificate.png");
        } else if (ismentor) {
          var mentor = document.getElementById("mentor").value;
          key = mentor.replace(/\s+/g, "%20");
          const link = `${process.env.PUBLIC_URL}certificates/Certificates_SoS/${key}.png`;
          console.log("LINK ",link)
          await saveAs(link, "sos-certificate.mentor.png");
        }
    
        // const links = ["completion", "Mentors", "Merit", "Special_Mention"];
        // var filename = `itsp-${links}.png`
        
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
        console.log(event.target.textContent)
        if (event.target.textContent !== "") {
            setselect(true);
        }
        else {
            setselect(false);
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
                        sx={{ width: 300 }}
                    >
                        <MenuItem value={10} name="Mentee">Student</MenuItem>
                        <MenuItem value={20} name="Mentor">Mentor</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {ismentee ?
                (<div className="card" id="participant">
                    <Autocomplete

                        id="mentee"
                        className="pt-5"
                        options={list}
                        getOptionLabel={option => option.label}
                        onChange={(e) => { valueChange(e) }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Mentee" />}
                    />
                    {/* <Autocomplete

                        id="project"
                        className="pt-5"
                        options={list}
                        getOptionLabel={option => option.Project}
                        onChange={(e) => { valueChange(e) }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Project" />}
                    /> */}

                </div>) : (<></>)
            }
            {ismentor ?
                (<div className="card" id="participant">
                    <Autocomplete

                        id="mentor"
                        className="pt-5"
                        options={mentor}
                        getOptionLabel={option => option.name}
                        onChange={(e) => { valueChange(e) }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Mentor" />}
                    />
                </div>) : (<></>)
            }
            {isselected ?
                (
                    <div className="button">
                        <button className="btn btn-danger" onClick={downloadfile}>Download</button>
                    </div>
                ) : (<></>)
            }
        </div>
    )
}
