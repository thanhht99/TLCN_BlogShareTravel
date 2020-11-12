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
router.get('/info/:id', async (req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testuser = await TourGuide.findOne({where:{accountId: idneed}});
    if (!testuser){
        res.send(404);
    }
    else {
        res.send(testuser);
    } 
})

// update
router.patch('/info/update/:id', async (req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testuser = await TourGuide.findOne({where:{accountId: idneed}});
    if (!testuser){
        res.send(404);
    }
    else {
        TourGuide.update(
            {   identity: req.body.identity,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                language: req.body.language,
                tripNumber: req.body.tripNumber,
                address: req.body.address,
                phone: req.body.phone,
                avatarPath: req.body.avatarPath
            },
            {where: {accountId : idneed}}
        ).then(()=>{
            res.send(200);
        })
    } 
})


module.exports = router;