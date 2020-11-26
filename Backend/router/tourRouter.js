let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
let path = require('path');

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

router.use(bodyParser.json());
router.use(cors());
// list 
router.get('/list', (req, res) => {
    Tour.findAll({

    }).then((tours) => {
        res.json(tours);
        //res.send(tours);
    }).catch((err) => {
        res.send(err);
    });
})

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

// blog & trip
router.get('/:id/blog&trip', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({ where: { tourId: idneed } });

    if (!test) {
        res.send(404);
    } else {
        //console.log("--------------------TRIP------------------");
        Trip.findAll({
            where: { tourId: idneed }
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});

// add
router.post('/add', (req, res, next) => {

    let tourGuideId = 1;
    if (tourGuideId === null) {
        return res.send("Truy cập bị từ chối!");
    } else {
        let valueTour = new Tour({
            name: req.body.name,
            summary: req.body.summary + "...",
            price: req.body.price,
            time: req.body.time,
            departureLocation: req.body.departureLocation,
            destination: req.body.destination,
            amount: req.body.amount,
            avatarPath: '../../assets/img/tour/default.png',
            isStatus: true,
            tourGuideId: 1
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

router.post('/addImage', upload.single('avatarPath'), (req, res, next) => {
    console.log("--------------BOGY2----------------");
    console.log(req.body);

    console.log("--------------FILE2----------------");
    console.log(req);
    const file = req.file
    console.log(req);
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    console.log("hello image")
    res.status(200).send({
        statusCode: 200,
        status: 'success',
        uploadedFile: file
    })

}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
})

module.exports = router;