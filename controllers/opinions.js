const User = require('../models/user');
const Opinion = require('../models/opinion');
const opinion = require('../models/opinion');

module.exports = {
    index,
    new: newOpinion,
    create,
    delete: deleteOpinion,
    show,
    edit,
    update,
    comment
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
    Opinion.findByIdAndDelete(req.params.id, function(err, result) {
      if(err) console.log(err);
      console.log('deleted');
      console.log(result);
      res.redirect('/opinions');
    });
  };

  function show(req, res) {
    Opinion.findById(req.params.id, function(err, opinion) {
      if(err) console.log(err);
      console.log(opinion);
      res.render('opinions/show', {opinion}); 
    });
  };

  function edit(req, res) {
    res.render('opinions/edit', {
      opinionId: req.params.id,
      opinion: Opinion.findById(req.params.id)
     }); 
  }

  function update(req, res) {
   const opinion = new Opinion(req.body); //NEW
    req.body.done = false;
    Opinion.findByIdAndUpdate(req.params.id, req.body, function(err, updatedOpinion) {
      res.redirect('/opinions');
    });  
  }
function comment(req, res) {
  Opinion.findById(req.params.id, req.body, function(err, opinion) {
    opinion.comment.push(req.body);
    opinion.save(function(err) {
      res.redirect(`/opinions/${req.params.id}`, {opinion});
      console.log(err);
    });
  });
}