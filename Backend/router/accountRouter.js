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
const {
    send,
    sendEmail
} = require('../utility/mail');

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

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


    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(valueAccount.password, salt);
    valueAccount.password = hash;

    //console.log(valueAccount);
    console.log('Account');
    valueAccount.save().then((data) => {
        //res.status(200).send(data);

        let valueCustomer = new Customer({
            name: req.body.fullname,
            email: req.body.email,
            isStatus: false,
            accountId: data.id
        });
    
        let valueTourGuide = new TourGuide({
            name: req.body.fullname,
            email: req.body.email,
            isStatus: false,
            accountId: data.id
        });

        if(valueAccount.isCustomer == true)
        {
            //console.log(valueCustomer);
            valueCustomer.save().then(async listDocCustomer => {
                //res.status(200).send(listDocCustomer);
                console.log('Customer');
                var req = {
                    username: valueAccount.username,
                    fullname: listDocCustomer.name,
                    email: listDocCustomer.email
                };
                //res.status(200).send(req);
                await sendEmail(req, res, next);
            });
        }
        if(valueAccount.isTourGuide == true)
        {
            //console.log(valueTourGuide);
            valueTourGuide.save().then(async listDocTourGuide => {
                //res.status(200).send(listDocTourGuide);
                console.log('TourGuide');
                var req = {
                    username: valueAccount.username,
                    fullname: listDocTourGuide.name,
                    email: listDocTourGuide.email
                };
                //res.status(200).send(req);
                await sendEmail(req, res, next);
            });
        }
        else
        {
            res.send(error);
        }
    });



    // if(valueAccount.password === req.body.confirmpassword )
    // {
        
    // }
    // else
    // {
    //     res.sendStatus(403);
    // }  
               
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


// login
router.post('/login', async (req, res, next) => {
        
    const {
        username,
        password
    } = req.body; 

    const account = await Account.findOne({
        where: {
            username: username
        }
    });
    // console.log('------------------Account--------------------------');
    // console.log(account);

    if (account && comparePassword(password, account.password)) {
        const accountCustomer = await Account.findOne({
            include:[{model: models.Customer,
                where: {accountId: account.id}}]            
        });
        const accountTourGuide = await Account.findOne({
            include:[{model: models.TourGuide,
                where: {accountId: account.id}}]            
        });
        if(accountCustomer)
        {
            res.status(200).send(accountCustomer);
            // console.log('------------------NAME--------------------------');
            // console.log(accountCustomer.Customers);
        }
        if(accountTourGuide)
        {
            res.status(200).send(accountTourGuide);
        }
        else
        {
            res.status(404).send('Not Found');
        }
    }
    else
    {        
        res.status(404).send('Not Found');
    }
});

    




module.exports = router;