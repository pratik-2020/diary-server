const pdfFileMode = require('../../model/pdfFile');
const pdfUserModel = require('../../model/pdfuser');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'ddcituqpc', 
    api_key: '575793552761264', 
    api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
    secure: true
});
const addpdffile = (req, res) => {
    const name = req.body.name;
    const fname = req.body.fname;
    const file = req.files.file;
    pdfUserModel.find({
        name: name
    }).then((response) => {
        if(response.length > 0){
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                if(err){
                    console.log(err);
                }
                else{
                    let pdffilem = new pdfFileMode();
                    pdffilem.username = name;
                    pdffilem.name = fname;
                    pdffilem.url = result.url;

                    pdffilem.save((er, data) => {
                        if(er){
                            console.log(er);
                        }
                        else{
                            res.send('Pdf file added successsfully!!');
                        }
                    })
                }
            })
        }
        else{
            res.send('User does not exist!!');
        }
    }).catch((err) =>{
        console.log(err);
    })

}

module.exports = addpdffile;