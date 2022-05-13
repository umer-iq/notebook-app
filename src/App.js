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
import { Alert } from "./components/Alert";
import Login from "./components/Login"
import Signup from "./components/Signup";

function App() {
  return (
    <>
    <Notestate>
      <header>
        <Navbar />
        
        <Alert message="this is an test of alert message"/>
      </header>
<div className="container">
      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
      </div>
      </Notestate>
    </>
  );
}

export default App;
