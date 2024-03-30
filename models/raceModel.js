const mongoose = require('mongoose');
const Job = require('./jobModel');

const raceSchema = new mongoose.Schema({
    bloodline : {
        type : String,
        required : true
    },

    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : Job,
        required : true
    }
});


module.exports = mongoose.model('Race', raceSchema);