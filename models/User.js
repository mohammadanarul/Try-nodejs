const {model, Schema} = require('mongoose')

enum userTypes {
    STUDENT = 'STUDENT',
    ADMIN = 'ADMIN'

}

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    rolse:[String],
    enum: {
        type: String,
        enum: Object.values(userTypes),
        default: userTypes.STUDENT,
        required: true
    },
})

const User = model('User', userSchema)
module.exports =  User;