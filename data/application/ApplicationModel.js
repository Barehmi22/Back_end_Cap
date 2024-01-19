const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({

    Services: String,
    RequestType: String,
    code: Number,
    cin:Number,
    firstName: String,
    lastName: String,
    state:Boolean
})

const Application = mongoose.model('Application', ApplicationSchema)

module.exports = Application;
