const Joi = require('joi')

exports.userValidation = (data) => {

    const schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(4).max(255).required().email(),
        phone: Joi.string().min(4).max(20).required().pattern(/^\+|\d[\s\d\-\(\)]*\d$/),
    })
    return schema.validate(data)
}