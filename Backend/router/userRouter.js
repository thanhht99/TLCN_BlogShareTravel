let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
let User = models.User;

router.use(bodyParser.json());

// list users
router.get('/lists', (req, res) => {
    User.find({}).then((lists) => {
        res.send(lists);
    })
})

// register
router.post('/register', async (req, res, next) => {

    let confirmPassword = req.body.confirmPassword;
    
    let newValue = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        avatarPath: req.body.avatarPath,
        username: req.body.username,
        password: req.body.password, 
        isAdmin: false,        
        isSuperAdmin: false
              
    });

    console.log(newValue);

    newValue.save().then((listDoc) => {
        res.send(listDoc);
    });
    
});



module.exports = router;