import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Calender from "./components/Calender";
import Create from "./components/Create";

function App() {
  return (
    <body>
      <Router>
        <Routes>
          <Route exact path="/" element={<Calender />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path="/edit/:id" element={<Edit />} /> */}
        </Routes>
      </Router>
    </body>
  );
}

export default App;
