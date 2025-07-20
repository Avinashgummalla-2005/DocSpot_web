import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BookAppointment() {
  const { doctorId } = useParams();
  const [form, setForm] = useState({ date: "", time: "", userId: "USER_ID", doctorId });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/appointments", form);
    alert("Appointment Booked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookAppointment;
