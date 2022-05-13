import "./App.css";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Notestate from "./context/notes/Notestate";
import  Alert  from "./components/Alert";
import Login from "./components/Login"
import Signup from "./components/Signup";
import {useState} from 'react'

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <Notestate>
      <header>
        <Navbar />
        
        <Alert alert={alert}/>
      </header>
<div className="container">
      <Routes>
        <Route exact path="/home" element={<Home showAlert={showAlert} />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </div>
      </Notestate>
    </>
  );
}

export default App;
