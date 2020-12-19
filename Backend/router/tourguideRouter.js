let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');

const Account = models.Account;
const TourGuide = models.TourGuide;

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


module.exports = router;