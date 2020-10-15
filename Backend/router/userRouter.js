// let express = require('express');
// let bodyParser = require('body-parser')
// let router = express.Router();
// // Load the models
// let models = require('../models');
// var bcrypt = require('bcrypt');

// //const User = models.User;

// router.use(bodyParser.json());

// // list users
// router.get('/register/lists', (req, res) => {
//     User.findAll({
//        // where:{isAdmin: false}
//     }).then((users) => {
//         res.send(users);
//     }).catch((err) =>{
//         res.send(err);
//     });
// })

// // register
// router.post('/register', async (req, res, next) => {
    
//     var salt = bcrypt.genSaltSync(10);
//     var hash = bcrypt.hashSync(req.body.password, salt);
//     req.body.password = hash;

//     let newValue = new User({
//         name: req.body.name,
//         email: req.body.email,
//         avatarPath: req.body.avatarPath,
//         // username: req.body.username,
//         // password: req.body.password, 
//         username: true,
//         password: false, 
//         isTourGuide: true,
//         isAdmin: false,        
//         isSuperAdmin: false
              
//     });

//     //console.log(newValue);

//     newValue.save().then((listDoc) => {
//         res.send(listDoc);
//     });
    
// });

// // find by id
// router.get('/register/:id', (req, res) => {
//     const idneed = parseInt(req.params.id, 10);
//     User.findOne({
//        where:{id: idneed}
//     }).then((users) => {
//         res.send(users);
//     }).catch((err) =>{
//         res.send(err);
//     });
// })

// // update info user
// router.patch('/register/:id', async (req, res) => {
//     const idneed = parseInt(req.params.id, 10);
//     const testuser = await User.findOne({where:{id: idneed}});

//     if (!testuser){
//         res.send(404);
//     }
//     else {
//         User.update(
//             {name: req.body.name,
//             email: req.body.email,
//             phone: req.body.phone,
//             avatarPath: req.body.avatarPath},
//             {where: {id : idneed}}
//         ).then(()=>{
//             res.send(200);
//         })
//     }                                
// });

// // delete user
// router.delete('/register/:id', async (req, res) => {
//     const idneed = parseInt(req.params.id, 10);
//     const testuser = await User.findOne({where:{id: idneed}});

//     if (!testuser){
//         res.send(404);
//     }
//     else {
//         User.destroy({
//             where: {id : idneed}
//         }).then(()=>{
//             res.send(200);
//         })
//     }                                
// });

// // 



// module.exports = router;