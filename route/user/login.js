const mongoose = require('mongoose');
const userModel = require('../../model/user');

const login = (req, res) => {
    const username = req.body.name;
    const pass = req.body.pass;
    userModel.find({
        username: username
    }).then((response) => {
        if(response.length > 0){
            if(response[0].password === pass){
                res.send('User may proceed');
            }
            else{
                res.send('Invalid credentials');
            }
        }
        else if(response.length === 0){
            res.send('User does not exist');
        }
    }).catch(err => {
        res.send(err);
    })
}

module.exports = login;