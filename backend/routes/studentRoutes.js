// studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');

// Route to get student data by userid
router.get('/students/:userid', studentController.getStudentByUserId);

module.exports = router;
