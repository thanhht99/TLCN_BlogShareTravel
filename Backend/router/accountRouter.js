let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
var bcrypt = require('bcrypt');

const Account = models.Account;
const Customer = models.Customer;
const TourGuide = models.TourGuide;

//const User = models.User;

router.use(bodyParser.json());


// list 
router.get('/lists', (req, res) => {
    Account.findAll({
       
    }).then((accounts) => {
        res.send(accounts);
    }).catch((err) =>{
        res.send(err);
    });
})


// register
router.post('/register', async (req, res, next) => {
    
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    let valueAccount = new Account({
        username: req.body.username,
        password: req.body.password,
        // isTourGuide: req.body.isTourGuide,
        // isCustomer: req.body.isCustomer,
        isTourGuide: true,
        isCustomer: false,
        isAdmin: false,
        isSuperAdmin: false,
        isStatus: true            
    });

    let valueCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        isStatus: false
    });

    let valueTourGuide = new TourGuide({
        name: req.body.name,
        email: req.body.email,
        isStatus: false
    });

    //console.log(valueAccount);

    valueAccount.save().then((listDoc) => {
        res.send(listDoc);
    });
    
    if(valueAccount.isCustomer == true)
    {
        //console.log(valueCustomer);
        valueCustomer.save().then((listDocCustomer) => {
            res.send(listDocCustomer);
        });
    }
    if(valueAccount.isTourGuide == true)
    {
        //console.log(valueTourGuide);
        valueTourGuide.save().then((listDocTourGuide) => {
            res.send(listDocTourGuide);
        });
    }
});

// delete account
router.delete('/register/:id', async (req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testuser = await Account.findOne({where:{id: idneed}});

    if (!testuser){
        res.send(404);
    }
    else {
        Account.destroy({
            where: {id : idneed}
        }).then(()=>{
            res.send(200);
        })
    }                                
});

// change status Account
router.patch('/register/:id/changeStatusAccount', async (req, res) => {
    const idneed = parseInt(req.params.id, 10);
    const testAccount = await Account.findOne({where:{id: idneed}});

    if (!testAccount){
        res.send(404);
    }
    else {
        Account.update(
            {isStatus: req.body.isStatus},
            {where: {id : idneed}}
        ).then(()=>{
            res.send(200);
        })
    }                                
});







module.exports = router;