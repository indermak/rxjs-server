const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {
    collection: 'user',
    timestamps: true
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
