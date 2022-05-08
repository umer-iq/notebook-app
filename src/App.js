import "./App.css";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
