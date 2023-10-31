// import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  // ToggleMode
  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled !","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled !","success")
    }
  }
  // Alert
  const showAlert = (message,type) =>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
 
return (
    <>
<Navbar title= "React" contact="Help" Search="Search Here" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<TextForm showAlert={showAlert} heading = "Enter your Text here : " mode={mode} />
{/* <About/> */}
    </>
  );
}

export default App;
