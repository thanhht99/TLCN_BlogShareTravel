let express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
// Load the models
let models = require('../models');
let path = require('path');

const Account = models.Account;
const Trip = models.Trip;
const Tour = models.Tour;
const Blog = models.Blog;

router.use(bodyParser.json());

// getBlogByIdTour
router.get('/:id', async(req, res) => {

    const idneed = parseInt(req.params.id, 10);
    const testBlog = await Blog.findOne({ where: { tourId: idneed } });
    if (!testBlog) {
        res.json(404);
    } else {
        res.json(testBlog.dataValues);
        console.log(testBlog.dataValues);
    }
});



module.exports = router;