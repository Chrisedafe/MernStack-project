const mongoose = require('mongoose');
const Joi = require('joi');

const walmartSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    YourGoods: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    Amount: {
        type: Number,
        required: true
    },
    Cards: {
        type: String,
        required: true,
        enum: ['steamCard', 'VanilaCard','GiftCard']
    },
    products: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Walmart = mongoose.model('Walmart', walmartSchema);

function validateWalmart(walmart) {
    const schema = {
        FullName: Joi.string().min(5).required(),
        YourGoods: Joi.string().min(5).required(),
        Amount: Joi.number().required(),
        Cards: Joi.string().min(5).required(),
        products: Joi.string().min(5).required()
    };
    return Joi.validate(walmart, schema);
}
exports.walmartSchema = walmartSchema;
exports.Walmart = Walmart;
exports.validate = validateWalmart;
