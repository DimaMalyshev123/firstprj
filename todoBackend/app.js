const express = require("express");
var mongoose = require('mongoose');
var router = require('./api/routes/router.js');

mongoose.connect('mongodb://admin:password@localhost:27017/admin',function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000);


