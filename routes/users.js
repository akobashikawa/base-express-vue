const express = require('express');
const router = express.Router();

const usersService = require('../services/usersService').create();
const usersController = require('../controllers/usersController').create({
  usersService
});

/* GET users listing. */
router.get('/', usersController.findAll());

module.exports = router;
