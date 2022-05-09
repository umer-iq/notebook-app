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

function App() {
  return (
    <>
    <Notestate>
      <header>
        <Navbar />
      </header>
<div className="container">
      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
      </Notestate>
    </>
  );
}

export default App;
