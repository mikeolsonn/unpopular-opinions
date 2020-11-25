const router = require('express').Router();
const opinionsCtrl = require('../controllers/opinions');

// GET /opinons
router.get('/opinions', opinionsCtrl.index); // I took out isLoggedIn from in between those words

// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()) return next();
//     res.redirect('/opinions');
// };

module.exports = router;
