// require modules
const express = require('express');

// require index controller
const indexCtrl = require('../controllers/index');

// create our router object
const router = express.Router();

// TODO: define our routes
router.get('/', indexCtrl.index);

// export the router object
module.exports = router;
