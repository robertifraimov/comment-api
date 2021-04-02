
const express = require('express');

const UsersController = require('./users.controller');

const routes = express.Router();

routes.get('/user', UsersController.getAll);

module.exports = routes;