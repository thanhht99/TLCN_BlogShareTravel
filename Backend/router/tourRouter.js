let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');

const Account = models.Account;
const Trip = models.Trip;
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

// list trip
router.get('/trip', (req, res) => {
    Trip.findAll({
       
    }).then((trips) => {        
        res.json(trips);
        //res.send(tours);
    }).catch((err) =>{
        res.send(err);
    });
})

// blog & trip
router.get('/:id/blog&trip', async (req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({where:{tourId: idneed}});

    if (!test){
        res.send(404);
    }
    else {
        //console.log("--------------------TRIP------------------");
        Trip.findAll({
            where: {tourId : idneed}
        }).then((trips) => {
            res.json(trips);
        }).catch((err) =>{
            res.send(err);
        });
    }                                
});

// add
router.post('/add', async (req, res) => {
        
    let valueTour = new Tour({
        name: req.body.name,
        summary: req.body.summary + "...",
        price: req.body.price,
        time: req.body.time,   
        departureLocation: req.body.departureLocation,
        destination: req.body.destination,      
        amount: req.body.amount,
        avatarPath: req.body.avatarPath,
        isStatus: true            
    });    
    console.log("---------------TOUR-----------------")
    //console.log(valueTour);
    valueTour.save()
        .then((data) => res.json(data))
        .catch();
});



module.exports = router;