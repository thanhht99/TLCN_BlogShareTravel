let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');
var sequelize = require('sequelize');
const { Op } = require("sequelize");

const Account = models.Account;
const TourGuide = models.TourGuide;
const Trip = models.Trip;
const Tour = models.Tour;
const RegisterTrip = models.RegisterTrip;
const Customer = models.Customer;

//const User = models.User;
const {
    send,
    sendEmail
} = require('../utility/mail');

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

router.use(bodyParser.json());


// info 
router.get('/info/:id', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testuser = await TourGuide.findOne({ where: { accountId: idneed } });
    if (!testuser) {
        res.send(404);
    } else {
        res.json(testuser);
    }
})

// update
router.post('/info/update', async(req, res) => {
    console.log(req.body)
    const idneed = req.body.accountId;
    const test = await TourGuide.findOne({ where: { accountId: idneed } });
    if (!test) {
        res.send(404);
    } else {
        await TourGuide.update({
            identity: req.body.cmnd,
            language: req.body.language,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email
        }, { where: { accountId: idneed } }).then((data) => {
            res.json(data);
        })
    }
})

// get trip by id tourGuideId chuyến đi đã hoàn thành
router.get('/:id/tripHoanThanh', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({
        where: {
            tourGuideId: idneed,
            isStatus: true
        }
    });
    if (!test) {
        res.json(404);
    } else {
        Trip.findAll({
            where: {
                tourGuideId: idneed,
                isStatus: true,
                startDate: {
                    [Op.lt]: new Date()
                        // [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
                }


                // todayDateTime: { $gt: sequelize.fn('startDate') }
                // startDate: {
                //     $lt: new Date('2021-10-20'),
                //     $gt: new Date(new Date('2021-10-20') - 24 * 60 * 60 * 1000)
                // }
            },
            order: [
                ['startDate', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: Tour
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// get trip by id tourGuideId
router.get('/:id/trip', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({
        where: {
            tourGuideId: idneed,
            isStatus: true
        }
    });
    if (!test) {
        res.json(404);
    } else {
        Trip.findAll({
            where: {
                tourGuideId: idneed,
                isStatus: true,
                startDate: {
                    [Op.gt]: new Date()
                        // [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
                }
            },
            order: [
                ['startDate', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: Tour
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// get ds khách hàng đăng ký tour
router.get('/detailTrip/:id', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await RegisterTrip.findOne({ where: { tripId: idneed, isConfirm: false } });
    if (!test) {
        res.json(404);
    } else {
        RegisterTrip.findAll({
            where: { tripId: idneed, isConfirm: false },
            order: [
                ['id', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: Account,
                include: [{
                    model: Customer
                }, {
                    model: TourGuide
                }]
            }, {
                model: Trip,
                include: [{
                    model: Tour
                }, {
                    model: TourGuide
                }]
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// get ds khách hàng đăng ký tour đã thanh toán
router.get('/detailTripDaThanhToan/:id', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await RegisterTrip.findOne({ where: { tripId: idneed, isConfirm: true } });
    if (!test) {
        res.json(404);
    } else {
        RegisterTrip.findAll({
            where: { tripId: idneed, isConfirm: true },
            order: [
                ['id', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: Account,
                include: [{
                    model: Customer
                }, {
                    model: TourGuide
                }]
            }, {
                model: Trip,
                include: [{
                    model: Tour
                }, {
                    model: TourGuide
                }]
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// get trip by id 
router.get('/detailTripById/:id', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({ where: { id: idneed } });
    if (!test) {
        res.json(404);
    } else {
        Trip.findOne({
            where: { id: idneed },
            order: [
                ['id', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: Tour
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});


module.exports = router;