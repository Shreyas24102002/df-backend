const express = require("express");
const { getContacts, addContact } = require("../controllers/allContacts");
const { getVol, addVol } = require("../controllers/allVolunteer");

const router = express.Router();

router.get("/", getContacts);

router.post("/add", addContact);

router.get("/check", getVol);

router.post("/addvol", addVol);

module.exports = router;
