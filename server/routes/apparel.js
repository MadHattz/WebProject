const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with apparelTrain

let Apparel = require('../models/apparel');
let apparelController = require('../controller/apparel');
/* CRUD Operartion*/



/* Read Operation */
/* Get route for workout list */

router.get('/', apparelController.displayapparelList);

/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation*/
router.get('/add', apparelController.displayAddPage);
/* Post route for processing the Add-Page -- Create Operation*/
router.post('/add', apparelController.processAddPage);


/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation*/
router.get('/edit/:id', apparelController.displayEditPage);
/* Post route for displaying the Edit Operation -- Update Operation*/
router.post('/edit/:id', apparelController.processEditPage);


/* Delete Operation*/
/* Get to perform delete operation -- Deletion*/
router.get('/delete/:id', apparelController.performDelete);


module.exports=router;

