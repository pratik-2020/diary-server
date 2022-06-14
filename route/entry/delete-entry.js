const mongoose = require('mongoose');

const entryModel = require('../../model/entry');

const deleteEntry = (req, res) => {
    const _id = req.body._id;
    entryModel.deleteOne({
        _id: _id
    }).then(response => {
        res.send('Entry deleted successfully');
    }).catch(err => {
        res.send('Error occoured');
    });
}

module.exports = deleteEntry;