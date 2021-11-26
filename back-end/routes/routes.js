const express = require('express');
const router = express.Router();
const course_enquiryRoutes = require('./course_enquirys.route');

router.use('/course_enquirys', course_enquiryRoutes);
module.exports = router;