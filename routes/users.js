const express = require('express');
const router = express.Router();

const db = require('../services/sqlite3Service').create();
const usersService = require('../services/usersService').create({
  db
});
const usersController = require('../controllers/usersController').create({
  usersService
});

router.get('/', usersController.findAll());
router.get('/:id', usersController.find());
router.post('/', usersController.add());
router.put('/:id', usersController.update());

module.exports = router;
