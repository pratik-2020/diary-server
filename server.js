const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const addUser = require('./route/user/adduser');
const deleteUser = require('./route/user/deleteuser');
const login = require('./route/user/login');
const addEntry = require('./route/entry/add-entry');
const deleteEntry = require('./route/entry/delete-entry');
const retrieveEntries = require('./route/entry/retrieve-entry');
app.use(express.json());
app.use(cors({
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ]
}))
const db = 'mongodb+srv://Pratik:Pratik@cluster0.piw6f.mongodb.net/restaurant-app?retryWrites=true&w=majority'
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection successful!!!');
})
.catch((err) => {
    console.log(err.message);
})
app.post('/login', (req, res) => {
    login(req, res);
});
app.post('/retrieveentries', (req, res) => {
    retrieveEntries(req, res);
})
app.post('/singnin', (req, res) => {
    console.log('hello')
    addUser(req, res);
});
app.post('/addentry', (req, res) => {
    addEntry(req, res);
});
app.post('/deleteentry', (req, res) => {
    deleteEntry(req, res);
});
app.post('/deleteUser', (req, res) => {
    deleteUser(req, res);
});
app.listen('3001','100.69.99.10', () => {
    console.log('Listening');
});