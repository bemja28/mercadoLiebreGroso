// const {loadUsers,storeUsers} = require('../data/db_moduls');
// const {validationResult}= require("express-validator");
// const bcriptjs = require("bcryptjs");
const provincias = require("../data/provincias");
const ciudades = require("../data/ciudades");
const fs = require("fs");
const path = require("path")


module.exports = {

    register : (req,res)=>{
    return res.render("formUsers")
    },
    procesRegister : (req,res)=>{
        return res.render("userRegister")
        
    },
    login : (req,res)=>{
        return res.render("login")
        
    }
}