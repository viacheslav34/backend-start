//initialize express router
const router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Bio Controller
const bioController = require('../models/Bio');

// Bio routes
router.route('/bio')
    .get(bioController.index)
    .post(bioController.add);

router.route('/bio/:bio_id')
    .get(bioController.getById)
    .put(bioController.update)
    .delete(bioController.delete);

//Export API routes
module.exports = router;
