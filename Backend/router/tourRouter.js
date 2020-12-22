let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
let path = require('path');
const Sequelize = require('sequelize')
const collect = require('collect.js');

// upload image
var fileExtension = require('file-extension')
const multer = require('multer');
var cors = require('cors');



//Set storage Engine
let storage = multer.diskStorage({
    destination: '../Frontend/src/assets/img/tour',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init Upload 
var upload = multer({
    storage: storage,
    limits: {
        // Setting Image Size Limit to 2MBs
        fileSize: 200000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            //Error 
            cb(new Error('Please upload JPG and PNG images only!'))
        }
        //Success 
        cb(undefined, true)
    }
})



const Account = models.Account;
const Trip = models.Trip;
const Tour = models.Tour;
const RegisterTrip = models.RegisterTrip;
const TourGuide = models.TourGuide;

router.use(bodyParser.json());
router.use(cors());
// list 
router.get('/list', (req, res) => {
    Tour.findAll({
        where: { isStatus: true },
        include: [{
            model: Trip,
        }],
    }).then((tours) => {
        for (let i in tours) {
            const collection = collect(tours[i].Trips);
            const x = collection.count();
            tours[i].numberTrip = x;
            Tour.update({
                numberTrip: x
            }, {
                where: { id: tours[i].id }
            })
        }
        // console.log(x);
        // tours.Trips = x;
        // res.json(tours);
    }).catch((err) => {
        res.send(err);
    });



    Tour.findAll({
        where: { isStatus: true },
        order: [
            ['numberTrip', 'DESC']
        ]
    }).then((tours) => {
        res.json(tours);
    }).catch((err) => {
        res.send(err);
    });
})

// list home limit:9
router.get('/listHome', (req, res) => {
    Tour.findAll({
        where: { isStatus: true },
        include: [{
            model: Trip,
        }],
    }).then((tours) => {
        for (let i in tours) {
            const collection = collect(tours[i].Trips);
            const x = collection.count();
            tours[i].numberTrip = x;
            Tour.update({
                numberTrip: x
            }, {
                where: { id: tours[i].id }
            })
        }
    }).catch((err) => {
        res.send(err);
    });

    Tour.findAll({
        where: { isStatus: true },
        order: [
            ['numberTrip', 'DESC']
        ],
        limit: 9
    }).then((tours) => {
        res.json(tours);
    }).catch((err) => {
        res.send(err);
    });
})

// get list tour Da Duyet by id
router.get('/:id/listDaDuyet', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const test = await Tour.findAll({ where: { tourGuideId: idneed, isStatus: true } });
    if (!test) {
        res.send(404);
    } else {
        Tour.findAll({
            where: { tourGuideId: idneed, isStatus: true },
            order: [
                ['id', 'ASC'] //tăng
            ],
        }).then((tours) => {
            res.json(tours);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// get list tour Chua Duyet by id
router.get('/:id/listChuaDuyet', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const test = await Tour.findAll({ where: { tourGuideId: idneed, isStatus: false } });
    if (!test) {
        res.send(404);
    } else {
        Tour.findAll({
            where: { tourGuideId: idneed, isStatus: false },
            order: [
                ['id', 'ASC'] //tăng
            ],
        }).then((tours) => {
            res.json(tours);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// info tour
router.get('/info/:id', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const testTour = await Tour.findOne({ where: { id: idneed } });
    if (!testTour) {
        res.json(404);
    } else {
        res.json(testTour.dataValues);
        // console.log(testTour.dataValues);
    }
});

// list trip
router.get('/trip', (req, res) => {
    Trip.findAll({

    }).then((trips) => {
        res.json(trips);
        //res.send(tours);
    }).catch((err) => {
        res.send(err);
    });
})

// get trip by id tour
router.get('/:id/trip', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({ where: { tourId: idneed } });

    if (!test) {
        res.status(404).json("No found");
    } else {
        //console.log("--------------------TRIP------------------");
        Trip.findAll({
            where: { tourId: idneed },
            order: [
                ['id', 'ASC']
                // tăng ASC
            ],
            include: [{
                model: TourGuide
            }]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});


// add
router.post('/add', (req, res, next) => {

    let testTourGuideId = req.body.tourGuideId;
    if (testTourGuideId === null) {
        return res.send("Truy cập bị từ chối!");
    } else {
        let valueTour = new Tour({
            name: req.body.name,
            summary: req.body.summary + "...",
            price: req.body.price,
            time: req.body.time,
            departureLocation: req.body.departureLocation,
            destination: req.body.destination,
            amount: 50,
            avatarPath: '../../assets/img/tour/default.png',
            isStatus: false,
            tourGuideId: testTourGuideId
        });
        valueTour.save()
            .then((data) => res.json(data))
            .catch((error) => res.status(400).send({
                error: error.message
            }));
    }
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});

router.post('/addImage/:id', upload.single('avatarPath'), async(req, res, next) => {
    const idneed = parseInt(req.params.id, 10);
    const tour = await Tour.findOne({ where: { id: idneed } });
    let testTourGuideId = req.body.tourGuideId;
    const file = req.file
    console.log(req.file)

    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    if (!tour || testTourGuideId === null) {
        res.send(404);
    } else {
        console.log("hello image")
        Tour.update({
            avatarPath: '../../assets/img/tour/' + req.file.filename,
            isStatus: true
        }, {
            where: { id: idneed }
        }).then(() => {
            res.status(200).send({
                statusCode: 200,
                status: 'success',
                //uploadedFile: file
            })
        })
    }
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
})

// add trip
router.post('/addTrip/:id', async(req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testTour = await Tour.findOne({ where: { id: idneed } });
    let testTourGuideId = req.body.tourGuideId;
    if (!testTour || testTourGuideId === null) {
        res.send(404);
    } else {
        let valueTrip = new Trip({
            infoHotel: req.body.infoHotel,
            infoVehicle: req.body.infoVehicle,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            price: req.body.price,
            childrenPrice: req.body.childrenPrice,
            babyPrice: req.body.babyPrice,
            amount: 40,
            theRemainingAmount: 40,
            isStatus: false,
            tourId: idneed,
            tourGuideId: testTour.tourGuideId
        });
        valueTrip.save()
            .then((data) => {
                // console.log(data);
                Tour.update({
                    amount: testTour.amount - 1,
                    numberTrip: testTour.numberTrip + 1
                }, { where: { id: testTour.id } });
                res.json(data);
            })
            .catch((error) => res.status(400).send({
                error: error.message
            }));

    }
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});

// Register Trip
router.post('/registerTrip', async(req, res) => {
    const idneed = req.body.tripId;
    const testTrip = await Trip.findOne({ where: { id: idneed } });
    let testAccountId = req.body.accountId;
    if (!testTrip || testAccountId === null) {
        res.send(404);
    } else {
        let valueRegisterTrip = new RegisterTrip({
            nameRegister: req.body.nameRegister,
            gender: req.body.gender,
            identity: req.body.identity,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            adults: req.body.adults,
            children: req.body.children,
            baby: req.body.baby,
            children: req.body.children,
            totalMoney: req.body.totalMoney,
            tripId: testTrip.id,
            accountId: testAccountId,
            maTour: req.body.maTour,
            isConfirm: false
        });
        let soLuongDangKi = valueRegisterTrip.adults + valueRegisterTrip.children + valueRegisterTrip.baby;
        // console.log(testTrip.theRemainingAmount)
        // console.log(soLuongDangKi)
        if (testTrip.theRemainingAmount >= soLuongDangKi) {
            valueRegisterTrip.save()
                .then((data) => {
                    // console.log(data);
                    Trip.update({
                        theRemainingAmount: testTrip.theRemainingAmount - soLuongDangKi
                    }, { where: { id: testTrip.id } });
                    res.json(data);
                })
                .catch((error) => res.status(400).send({
                    error: error.message
                }));
        } else {
            //Số lượng không đủ để đăng kí.
            res.status(400).send({
                error: 'Số lượng không đủ để đăng kí.'
            })
        }

    }
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});


module.exports = router;