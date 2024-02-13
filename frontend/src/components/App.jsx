import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Redaction from "../pages/Redaction";
import PubRules from "../pages/PubRules";
import Archive from "../pages/Archive";
import AboutUs from "../pages/AboutUs";
import Partnership from "../pages/Partnership";
import Officials from "./Officials";
function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/redaction" element={<Redaction />} />
          <Route path="/partners" element={<Partnership />} />
          <Route path="/rules" element={<PubRules />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/officials" element={<Officials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
