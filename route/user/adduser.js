const mongoose = require('mongoose');
const userModel = require('../../model/user');
const addUser = (req, res) => {
    const username = req.body.name;
    const password = req.body.pass;
    let userm = new userModel();
    userm.username = username;
    userm.password = password;
    userm.save((err, data) => {
        if(err){
            res.send(err.message);
        }
        else{
            res.send('User added successfully');
        }
    });
}

module.exports = addUser;