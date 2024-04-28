const express=require("express");
const router=express.Router();
const User = require("../models/model");
const controller=require("../controllers/controller");
router.get("/home",controller.home);
router.post("/register",controller.register);
module.exports=router;