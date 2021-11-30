const Sequelize = require('sequelize');
const db = require('../config/database');

const ResourceEnquiry = db.define('ResourceEnquiry', {
    resource_enquiry_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resource_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    enquirer_name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    enquirer_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status : {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = ResourceEnquiry;