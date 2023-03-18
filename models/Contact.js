const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fullName: {
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
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
