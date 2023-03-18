const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    // maxlength: 10,
    required: true,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
  },
  education: {
    type: String,
    required: true,
  },
  business: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
  },
  experience: {
    type: String,
  },
  help: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
