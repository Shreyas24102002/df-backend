const Volunteer = require("../models/Volunteer");

const getVol = async (req, res, next) => {
  let volunteers;
  try {
    volunteers = await Volunteer.find();
  } catch (error) {
    console.log(error);
  }
  if (!volunteers) {
    return res.status(404).json({ message: "No Volunteer Found" });
  }
  return res.status(200).json({ volunteers });
};

const addVol = async (req, res, next) => {
  const {
    fullName,
    address,
    contactNo,
    email,
    dob,
    bloodGroup,
    education,
    business,
    hobbies,
    experience,
    help,
  } = req.body;

  const vol = new Volunteer({
    fullName,
    address,
    contactNo,
    email,
    dob,
    bloodGroup,
    education,
    business,
    hobbies,
    experience,
    help,
  });
  try {
    await vol.save();
    console.log("Volunteer Added");
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ vol });
};

module.exports = { getVol, addVol };
