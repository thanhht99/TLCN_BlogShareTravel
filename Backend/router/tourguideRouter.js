let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');

const Account = models.Account;
const TourGuide = models.TourGuide;
const Trip = models.Trip;

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

// get trip by id tourGuideId
router.get('/:id/trip', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const test = await Trip.findOne({ where: { tourGuideId: idneed } });
    if (!test) {
        res.json(404);
    } else {
        Trip.findAll({
            where: { tourGuideId: idneed },
            order: [
                ['id', 'ASC']
                // tăng ASC
            ]
        }).then((trips) => {
            res.json(trips);
        }).catch((err) => {
            res.send(err);
        });
    }
});


module.exports = router;