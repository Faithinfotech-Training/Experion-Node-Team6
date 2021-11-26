const Sequelize = require('sequelize')
const db = require('../config/database')
 
const Course_enquiry = db.define('course_enquiry', {
 /*course_enquiryId
course_id
enquirer_name
enquirer_email
status
 */
    course_enquiryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    enquirer_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    enquirer_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    enquirer_phone: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
 
})
 
module.exports = Course_enquiry;
