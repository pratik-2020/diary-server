const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const argv = require('yargs').argv;
const app = express();
const addUser = require('./route/user/adduser');
const deleteUser = require('./route/user/deleteuser');
const login = require('./route/user/login');
const addEntry = require('./route/entry/add-entry');
const deleteEntry = require('./route/entry/delete-entry');
const addpdfuser = require('./route/PdfUser/addpdfuser');
const addpdffile = require('./route/PdfFile/addpdf');
const retrieveEntries = require('./route/entry/retrieve-entry');
const fileUpload = require('express-fileupload');
const retpdf = require('./route/PdfFile/retivepdf');
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true
}));
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
});
app.get('/', (req, res) => {
    res.send('Welcome');
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
app.post('/addpdfuser', (req, res) => {
    addpdfuser(req, res);
})
app.post('/addpdffile', (req, res) => {
    addpdffile(req, res);
});
app.post('/retpdf', (req, res) => {
    retpdf(req, res);
})
const pt = argv.port || 3001;
app.listen( pt, () => {
    console.log("Listening at "+pt+"!!");
});