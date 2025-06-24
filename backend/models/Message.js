const mongoose = require('mongoose');

const Message = mongoose.model('Message', mongoose.Schema({
        name: String,
        phone: String,
        email: String,
        message: String
}))

module.exports = Message;

