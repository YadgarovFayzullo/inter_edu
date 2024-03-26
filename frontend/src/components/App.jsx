import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar"; 
import Home from "../pages/Home";
import Redaction from "../pages/Redaction";
import PubRules from "../pages/PubRules";
import Archive from "../pages/Archive";
import AboutUs from "../pages/AboutUs";
import Partnership from "../pages/Partnership";
import Officials from "./Officials";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import AdminNews from "../pages/AdminNews";
import AdminBook from "../pages/AdminBook";
import AdminPartners from "../pages/AdminPartners";
import AdminArchive from "../pages/AdminArchive";

function App() {
 
  const [isAdmin, setIsAdmin] = useState(false);

  
  const setAdminStatus = (status) => {
    setIsAdmin(status);
  };

  return (
    <div>
      <Router>

        {isAdmin && <Sidebar />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/redaction" element={<Redaction />} />
          <Route path="/partners" element={<Partnership />} />
          <Route path="/rules" element={<PubRules />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/officials" element={<Officials />} />
          <Route path="/login" element={<Login setAdminStatus={setAdminStatus} />} />
          <Route path="/admin" element={<Admin />} />
          {/* admin pages */}
          <Route path="/adminNews" element={<AdminNews />} />
          <Route path="/adminBook" element={<AdminBook />} />
          <Route path="/adminPartners" element={<AdminPartners />} />
          <Route path="/adminArchive" element={<AdminArchive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
