const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./voting-app-84268-firebase-adminsdk-rzvhq-111e745cf8.json');

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://voting-app-84268.firebaseio.com'
});

var database = firebaseAdmin.database();

const port = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));

app.get('/', function (req,res) {
    res.render('home.ejs');
});

app.get('/home', function (req, res) {
   res.render('home.ejs');
});

app.get('/flights', function (req, res) {
    res.render('flight.ejs');
});

app.get('/trains', function (req, res) {
    res.render('train.ejs', {'trn_info': null});
});

app.get('/bus', function (req, res) {
    res.render('bus.ejs', {'trn_info': null});
});

app.get('/hotel', function (req, res) {
    res.render('hotel.ejs', {'trn_info': null});
});

app.listen(port, function () {
    console.log('App is running on port ' + port);
});