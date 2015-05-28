/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcrypt');

module.exports = {
  //POST /api/auth
	login: function(req,res) {
    // res.send('You hit the login route');
    User.findOne({email: req.body.email}).then(function(user) {
      // res.send(user);
      if (user) {
        // res.send(user);
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) return res.send({result:false, error:err});

          if (result) {
            // Password matched
            req.session.user = user;
            res.send({
              result: true,
              user: user
            })
          } else {
            // Password didn't match
            res.send({
              result: false,
              error: 'Invalid Password.'
            })
          }
        })
      } else {
        res.send({
          result: false,
          error: "Unknown user"
        })
      }
    })
  },
  //DELETE /api/auth
  logout: function(req,res) {
    // res.send("You hit the logout route");
    delete req.session.user;
    res.send({result:true});
  },
  //GET /api/auth
  check: function(req,res) {
    // res.send("You hit the check route");
    res.send({user:req.session.user || false});
  }
};

