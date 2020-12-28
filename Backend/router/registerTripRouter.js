let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');

const Account = models.Account;
const Trip = models.Trip;
const Tour = models.Tour;
const RegisterTrip = models.RegisterTrip;
const TourGuide = models.TourGuide;

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
            }, {
                model: TourGuide
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
            }, {
                model: TourGuide
            }]
        }]
    }).then((registertrips) => {
        // console.log(registertrips);
        res.json(registertrips);
    }).catch((err) => {
        res.send(err);
    });
})

router.get('/duyet/:id', async(req, res) => {

    // console.log(req.body);

    const idneed = parseInt(req.params.id, 10);
    // console.log(idneed);
    const registerTrip = await RegisterTrip.findOne({ where: { id: idneed } });
    if (!registerTrip) {
        res.json(404);
    } else {
        await RegisterTrip.update({
            isConfirm: true
        }, { where: { id: idneed } }, { new: true }).then((data) => {
            console.log(data);
            // res.json(data);
        })
    }
})

module.exports = router;