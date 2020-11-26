const User = require('../models/user');
const Opinion = require('../models/opinion');

module.exports = {
    index,
    new: newOpinion,
    create,
    delete: deleteOpinion
};

function index(req, res) {
      Opinion.find({}, function(err, opinions) { 
      res.render('opinions/index', { 
        opinions,
        user: req.user
     });
    });
  };


  function newOpinion(req, res) {
    res.render('opinions/new');
  };

  function create(req, res) {
    const opinion = new Opinion(req.body);
    opinion.save(function(err) {
        
        if(err) {
            res.render('opinions/new')
        } else {
          console.log(opinion);
        res.redirect(`/opinions`);
        }
    });
  };
  
  function deleteOpinion(req, res) {
    req.body = req.params.id;
    Opinion.findOneAndDelete(req.body, function(err) {
      if(err) console.log(err);
      console.log('deleted')
    });
    res.redirect('/opinions');
  };