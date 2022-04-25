const {model, Schema} = require('mongoose')
const AdminAttendance = require('./adminAttendance')

const studentAttentdanceSchema = new Schema({
    createdAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    adminAttendance: {
        type: Schema.types.ObjectId,
        ref: 'AdminAttendance'
    }
})