// utils/validators.js
const Joi = require('joi');

exports.registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    return schema.validate(data);
};

exports.loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required(),
    });
    return schema.validate(data);
};

exports.bookValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(1).max(255).required(),
        author: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(data);
};

exports.calcReturnDate = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return {date, newDate};
}
