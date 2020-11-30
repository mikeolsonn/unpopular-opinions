// require modules
const express = require('express');

// require index controller
const indexCtrl = require('../controllers/index');


// create our router object
const router = express.Router();

const passport = require('passport');

// TODO: define our routes
router.get('/', indexCtrl.index);


router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/opinions',
        failureRedirect: '/'
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});




// export the router object
module.exports = router;
