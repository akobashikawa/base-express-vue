const express = require('express');
const router = express.Router();

const db = require('../services/usersServiceSqlite3').create();
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
router.delete('/:id', usersController.delete());

module.exports = router;
