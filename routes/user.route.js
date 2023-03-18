const express=require("express");
const { register, login } = require("../controllers/user");
// const { authenticated } = require("../middleware/auth");
const router=express.Router();

router.post("/register",register);
router.post("/login",login)

module.exports=router