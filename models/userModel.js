const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User must have name']
    },
    email: {
        type: String,
        required: [true, 'User must have e-mail']
    },
    password: {
        type: String,
        required: [true, 'User must have password']
    },
    role: {
        type: String,
        required: [true, 'User must have role']
    },
    cart: {
        items: [
            {
                count: {
                    type: Number,
                    require: true,
                    default: 1
                },
                itemId: {
                    type: Schema.Types.ObjectId,
                    ref: "Products",
                    require: true
                }
            }
        ]
    }
})

module.exports = model('User', UserSchema)