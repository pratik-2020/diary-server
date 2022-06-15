const mongoose = require('mongoose');

const pdfFileSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const pdfFileModel = mongoose.model('PdfFile', pdfFileSchema);

module.exports = pdfFileModel;