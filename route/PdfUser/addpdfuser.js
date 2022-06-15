const pdfUserModel = require('../../model/pdfuser');

const addPdfUser = (req, res) => {
    const name = req.body.name;
    const pass = req.body.pass;
    let pdfm = new pdfUserModel;
    pdfm.name = name;
    pdfm.password = pass;
    pdfm.pdf = true;

    pdfm.save((err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.send('User added successfully!!!');
        }
    })
}
module.exports = addPdfUser;