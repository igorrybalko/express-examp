const db = require('../ext/db')

const schema = new db.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 4,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 4,
        trim: true
    },
    create: {
        type: Date,
        default: Date.now()
    }
})

schema.methods.getNameInUpperCase = function(){
    let name = this.firstName + ' ' + this.lastName
    return name.toUpperCase()
}

module.exports = db.model('User', schema)