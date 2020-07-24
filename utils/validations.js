const Joi = require('@hapi/joi');

const registerValidation = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .min(4)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res
            .status(400)
            .json({ success: false, error: error.details[0].message });
    return next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .min(4)
            .required(),
        password: Joi.string()
            .min(6)
            .required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res
            .status(400)
            .json({ success: false, error: error.details[0].message });
    return next();
};

exports.registerValidation = registerValidation;
exports.loginValidation = loginValidation;
