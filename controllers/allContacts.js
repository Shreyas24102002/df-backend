const Contact = require("../models/Contact");

const getContacts = async (req, res, next) => {
  let contacts;
  try {
    contacts = await Contact.find();
  } catch (error) {
    console.log(error);
  }

  if (!contacts) {
    return res.status(404).json({ message: "No Contacts Found!!" });
  }
  return res.status(200).json({ contacts });
};

const addContact = async (req, res, next) => {
  const { fullName, contactNo, email, message } = req.body;

  const newContact = new Contact({
    fullName,
    contactNo,
    email,
    message,
  });

  try {
    await newContact.save();
    console.log("Added!!");
  } catch (error) {
    return console.log(error);
  }
  return res.status();
};

module.exports = { getContacts, addContact };
