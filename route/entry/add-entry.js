const mongoose = require('mongoose');
const entryModel = require('../../model/entry');

const addEntry = (req, res) => {
    const username = req.body.username;
    const data = req.body.data;
    const date = new Date().getDate();
    let entrym = new entryModel();
    entrym.username = username;
    entrym.data = data;
    entrym.date = date;
    entrym.save((err, data) => {
        if(err){
            res.send(err);
        }
        else{
            res.send('Entry addedd successfully');
        }
    });
}

module.exports = addEntry;