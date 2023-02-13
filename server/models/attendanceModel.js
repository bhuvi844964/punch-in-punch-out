const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const attendanceSchema = new mongoose.Schema({
   
    userId: {
        type: ObjectId,
        required: true,
        ref: "user"
    },
    Date: {
        type:String
    },
    PunchIn: {
        type:String
    },

    PunchOut: {
        type:String
    },
    session: {
        type:String
    },
   
}, { timestamps: true });


module.exports = mongoose.model('attendance', attendanceSchema) 


