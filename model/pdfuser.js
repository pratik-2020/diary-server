const mongoose = require('mongoose');
const pdfUserSchame = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    pdf: {
        type: Boolean,
        required: true
    }
});

const pdfUserModel = mongoose.model('PdfUser', pdfUserSchame);

module.exports = pdfUserModel;