let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');

const Account = models.Account;
const Customer = models.Customer;
const Tour = models.Tour;

router.use(bodyParser.json());

// list 
router.get('/list', (req, res) => {
    Tour.findAll({
       
    }).then((tours) => {
        res.json(tours);
        //res.send(tours);
    }).catch((err) =>{
        res.send(err);
    });
})




module.exports = router;