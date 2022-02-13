const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const auth = require('../middleware/auth');


router.get("/",staffController.getStaffs);

router.post("/add" ,staffController.addStaff);
router.post("/login",staffController.login);

module.exports= router;