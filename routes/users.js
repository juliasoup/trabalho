var express = require('express');
var router = express.Router();
const auth = require('../auth'); 

const db =require('../models') 

const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const userService = new UserService(db.User);
const userController = new UserController(UserService);

router.get('/', function(req, res, next) {
  res.send('Módulo de usuários rodando.');
});

router.post('/login', async(req,res)=>{
  userController.login(req,res);
});

router.post('/novouser', async (req,res)=>{
  userController.createUser(req,res);
});

router.get('/allusers', auth.verifyToken, async(req,res)=>{
  userController.findAllUsers(req,res);
});

router.get('/getUserById', async (req,res)=>{
  userController.findUserById(req,res);
});

module.exports = router;
