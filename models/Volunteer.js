const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  fullName: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNo: {
    type: Number,
    // maxlength: 10,
  },
  email: {
    type: String,
  },
  dob: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  education: {
    type: String,
  },
  business: {
    type: String,
  },
  hobbies: {
    type: String,
  },
  gender: {
    type: String,
  },
  social: {
    type: String,
  },
  help: {
    type: String,
  },
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
