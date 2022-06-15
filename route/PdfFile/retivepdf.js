const pdfFileModel = require('../../model/pdfFile');

const retpdf = (req, res) => {
    const name = req.body.name;
    pdfFileModel.find({
        username: name
    }).then((response) => {
        res.send(response);
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = retpdf;