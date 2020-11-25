const User = require('../models/user');

module.exports = {
    index,
};

function index(req, res) {
    User.find({}, function(err, opinions) { // if doesnt work change users to opinions
      res.render('opinions/index', { 
        opinions,
        user: req.user
     });
    });
  }
  