require('./models/db');

const express = require('express');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/prescriptionController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/prescription', employeeController);