const mongoose = require('mongoose');

var prescriptionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    age: {
        type: Number,
    },
    mobile: {
        type: Number
    },
    city: {
        type: String
    },
    doctor: {
        type:String
    },
    complaints:{
        type:String
    },
    allergies:{
        type:String
    },
    diagnosis:{
        type:String
    },
    prescribed_medicine: [
        {
        
            dosage:String,
            qty: String,
            consumption_time: String

        }
    ]


});

// Custom validation for email
prescriptionSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Prescription', prescriptionSchema);