import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Create from "./pages/Create";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
