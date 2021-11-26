const ResourceEnquiry = require('../models/ResourceEnquiry');
var resourceEnquiryDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateResourceEnquiry: updateResourceEnquiry
}

function findAll() {
    return ResourceEnquiry.findAll();
}

function findById(resource_enquiry_id) {
    return ResourceEnquiry.findByPk(resource_enquiry_id);
}

function deleteById(resource_enquiry_id) {
    return ResourceEnquiry.destroy({ where: { resource_enquiry_id: resource_enquiry_id} });
}

function create(resourceEnquiry) {
    var newResourceEnquiry = new ResourceEnquiry(resourceEnquiry);
    return newResourceEnquiry.save();
}

function updateResourceEnquiry(resourceEnquiry, resource_enquiry_id) {
    var updateResourceEnquiry = {
       resource_id: resourceEnquiry.resource_id,
       enquirer_name : resourceEnquiry.enquirer_name ,
        publish_date: resourceEnquiry.publish_date,
        status: resourceEnquiry.status ,
       
    };
    return ResourceEnquiry.update(updateResourceEnquiry, { where: { resource_enquiry_id: resource_enquiry_id} });
}
module.exports = resourceEnquiryDao;