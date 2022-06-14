const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require: true
    }
});

const entryModel = mongoose.model('Entry', entrySchema);

module.exports = entryModel;