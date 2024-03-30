const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    // Classes / Jobs
    class : {
        type : String,
        required : true
    },

    // Stats
    stats : {
        hp : {
            type: Number,
            required : true
        },
        mp : {
            type: Number,
            required : true
        },
        str : {
            type: Number,
            required : true
        },
        def : {
            type: Number,
            required : true
        },
        matk : {
            type: Number,
            required : true
        },
        mdef : {
            type: Number,
            required : true
        },
        agl : {
            type: Number,
            required : true
        },
    },

    // Images
    image : {
        male : {
            teen : String,
            young : String,
            adult : String,
            middle : String,
            old : String
        },

        female : {
            teen : String,
            young : String,
            adult : String,
            middle : String,
            old : String
        }
    }
});


module.exports = mongoose.model('Job', jobSchema);