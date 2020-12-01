const User = require('../models/user');
const Opinion = require('../models/opinion');


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
  User.find().populate('opinions').exec(function(err, users) {
    console.log(users);
    res.render('opinions/index', {
          title: 'All Opinions', 
          user: req.user,
          users
       });
      })
  };


  function newOpinion(req, res) {
    res.render('opinions/new', {
     title: 'Add Opinion',
     user: req.user,
   });
  };

  function create(req, res) {
    User.findById(req.user.id, function(err, user) {
      console.log(`user: ${user}`);
      
    Opinion.create(req.body, function(err, opinion) {
      user.opinions.unshift(opinion._id);
    user.save(function(err) {
  
        if(err) {
            res.render('opinions/new')   
        } else {
          console.log(opinion);
        res.redirect(`/opinions`);
        }
    });
    });
  });
  }
  
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
      res.render('opinions/show', {opinion, title: 'Opinion Details', user: req.user}); 
    });
  };

  function edit(req, res) {
    res.render('opinions/edit', {
      opinionId: req.params.id,
      opinion: Opinion.findById(req.params.id),
      user: req.user,
      title: 'Change Your Opinion'
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

  Opinion.findById(req.params.id, function(err, opinion) {
    console.log(opinion, req.body);
    opinion.comment.push(req.body);
  
    opinion.save(function(err) {
      res.redirect(`/opinions/${req.params.id}`); 
      console.log(err);
    });
  });
}