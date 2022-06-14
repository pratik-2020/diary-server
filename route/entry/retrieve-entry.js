const mongoose = require('mongoose');
const entryModel = require('../../model/entry');

const retrieveEntries = (req, res) => {
    const username = req.body.name;
    entryModel.find({
        username: username
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    })
}

module.exports = retrieveEntries;