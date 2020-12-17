let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');

const Account = models.Account;
const Trip = models.Trip;
const Tour = models.Tour;
const RegisterTrip = models.RegisterTrip;

router.get('/listChuaDuyet/:id', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    RegisterTrip.findAll({
        where: { isConfirm: false, accountId: idneed },
        order: [
            ['id', 'DESC'] //tăng
            // tăng ASC
        ],
        include: [{
            model: Trip,
            include: [{
                model: Tour
            }]
        }]
    }).then((registertrips) => {
        // console.log(registertrips);
        res.json(registertrips);
    }).catch((err) => {
        res.send(err);
    });
})

router.get('/listDaDuyet/:id', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    RegisterTrip.findAll({
        where: { isConfirm: true, accountId: idneed },
        order: [
            ['id', 'DESC'] //giảm
        ],
        include: [{
            model: Trip,
            include: [{
                model: Tour
            }]
        }]
    }).then((registertrips) => {
        // console.log(registertrips);
        res.json(registertrips);
    }).catch((err) => {
        res.send(err);
    });
})

module.exports = router;