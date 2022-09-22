import logo from './logo.svg';
import './App.css';
import list from "./list.js"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function App() {
  return (
    <>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      className="pt-5"
      options={list}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Name" />}
    />
    </>
  );
}

export default App;
