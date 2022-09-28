const express = require('express');
const router = express.Router();
const { register, procesRegister, login } = require("../controllers/usersController");


router
  .get('/register',register) // /users/register
  .post("/userRegister", procesRegister)
  .get('/login',login)





module.exports = router;