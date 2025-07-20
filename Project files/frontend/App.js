import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/book/:doctorId" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;// Frontend - React App.js placeholder
