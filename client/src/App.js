import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Calender from "./components/Calender";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Calender />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
