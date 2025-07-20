const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send({ message: "Appointment Booked" });
});

router.get("/", async (req, res) => {
  const appointments = await Appointment.find().populate("doctorId").populate("userId");
  res.send(appointments);
});

module.exports = router;
