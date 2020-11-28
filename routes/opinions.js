const express = require('express');
const router = express.Router();
const opinionsCtrl = require('../controllers/opinions');


router.get('/', opinionsCtrl.index); 
router.get('/new', opinionsCtrl.new);
router.post('/', opinionsCtrl.create);
router.delete('/:id', opinionsCtrl.delete);
// NEW:
router.get('/:id', opinionsCtrl.show);
router.get('/:id/edit', opinionsCtrl.edit);
router.put('/:id', opinionsCtrl.update);
router.post('/:id', opinionsCtrl.comment);



// function isLoggedIn(req, res, next) {
//     if(req.isAuthenticated()) return next();
//     res.redirect('/opinions');
// };

module.exports = router;
