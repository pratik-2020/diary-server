const mongo = require('mongoose');
const userSchema = mongo.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongo.model('User', userSchema);

module.exports = userModel;