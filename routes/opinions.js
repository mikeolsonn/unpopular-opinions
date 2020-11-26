const express = require('express');
const router = express.Router();
const opinionsCtrl = require('../controllers/opinions');


router.get('/', opinionsCtrl.index); 
router.get('/new', opinionsCtrl.new);
router.post('/', opinionsCtrl.create);
router.delete('/:id', opinionsCtrl.delete);


module.exports = router;

// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()) return next();
//     res.redirect('/opinions');
// };