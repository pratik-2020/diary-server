const mongoose = require('mongoose');
const userModel = require('../../model/user');

const deleteUser = (req, res) => {
    const username = req.body.name;
    userModel.deleteOne({
        username: username
    }).then((response) => {
        res.send('User deleted successfully');
    }).catch((err) => {
        res.send(err);
    });
}
module.exports = deleteUser;