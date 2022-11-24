const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Prescription = mongoose.model('Prescription');

router.post('/', (req, res) => {
        insertRecord(req, res);
        
});


function insertRecord(req, res) {
    var prescription = new Prescription();
    prescription.fullName = req.body.fullName;
    prescription.email = req.body.email;
    prescription.mobile = req.body.mobile;
    prescription.city = req.body.city;
    prescription.save((err, doc) => {
        if (!err){
            //we can add pdfkit  library here to add that in particular folder or add it over cloud on AWS S3 or gcp
            res.status(200).send({status:"Prescription recorded" ,doc:doc})}
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.status(400).send({error:"some error occured at your server or validation error"})
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}



module.exports = router;