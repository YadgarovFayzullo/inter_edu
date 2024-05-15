import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import Redaction from "../pages/Redaction";
import PubRules from "../pages/PubRules";
import Archive from "../pages/Archive";
import AboutUs from "../pages/AboutUs";
import Partnership from "../pages/Partnership";
import Officials from "./Officials";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
// import AdminNews from "../pages/AdminNews";
// import AdminBook from "../pages/AdminBook";
// import AdminPartners from "../pages/AdminPartners";
// import AdminArchive from "../pages/AdminArchive";
// import AdminDoc from "../pages/AdminDoc";
import Doc from "../pages/Doc";
import useAuth from "../hooks/useAuth";
import Editions from "./Editions";

function App() {
  const { isAuthenticated } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  const setIsAdminStatus = (status) => {
    isAdmin(status);
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
          <Route path="/doc" element={<Doc />} />
          <Route path="/edition" element={<Editions />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
          />
          {/* admin pages */}
          {/* <Route
            path="/adminNews"
            element={isAuthenticated ? <AdminNews /> : <Navigate to="/login" />}
          />
          <Route
            path="/adminBook"
            element={isAuthenticated ? <AdminBook /> : <Navigate to="/login" />}
          />
          <Route
            path="/adminPartners"
            element={
              isAuthenticated ? <AdminPartners /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/adminArchive"
            element={
              isAuthenticated ? <AdminArchive /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/adminDoc"
            element={isAuthenticated ? <AdminDoc /> : <Navigate to="/login" />}
          />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
