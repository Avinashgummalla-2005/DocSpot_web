const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  doctorId: mongoose.Schema.Types.ObjectId,
  date: String,
  time: String,
  status: { type: String, default: "Pending" }
});
module.exports = mongoose.model("Appointment", appointmentSchema);
