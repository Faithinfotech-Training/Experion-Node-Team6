
const express = require('express');

const router = express.Router();
const resourceRoutes = require("./resource.route");

const courseRoutes=require('./course.route');
const resourceEnquiryRoutes=require('./resourceEnquiry.route')

router.use('/course',courseRoutes);
const course_enquiryRoutes = require('./course_enquirys.route');
router.use('/course_enquirys', course_enquiryRoutes);
router.use('/resourceEnquiry',resourceEnquiryRoutes);
router.use('/resource', resourceRoutes)

module.exports = router;

