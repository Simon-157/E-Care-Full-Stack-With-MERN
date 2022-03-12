const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({

        email: {
            type: 'string',
            required: true,

        },

        avatar: {
            type: "string",
            default: " "

        },
        name: {
            type: 'string',
            required: true,
        }

    }

);

const User = mongoose.model('User', UserSchema);

module.exports.User = User;
