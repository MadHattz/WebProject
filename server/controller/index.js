let express = require('express');
let router = express.Router();

/* Rendering for the home page */
module.exports.displayHomePage = (req, res, next) =>{
    res.render('index', { title: 'HomePage' });
};
//Display Login Page
module.exports.displayLoginPage = (req, res, next)=> {
    res.render('index', { title: 'Login' ,
    section: 'Login'
  });
  }