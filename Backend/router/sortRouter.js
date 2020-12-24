let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
let models = require('../models');
let path = require('path');
const collect = require('collect.js');

// upload image
var fileExtension = require('file-extension')
const multer = require('multer');
var cors = require('cors');


const Account = models.Account;
const Trip = models.Trip;
const Tour = models.Tour;
const RegisterTrip = models.RegisterTrip;
const TourGuide = models.TourGuide;

// sắp xếp tour

module.exports = router;