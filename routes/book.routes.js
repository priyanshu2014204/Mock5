const express=require("express");
const { booking, dashboard } = require("../controllers/book");
const authentication = require("../middleware/auth");
const router=express.Router();


router.post("/booking",authentication,booking)
router.get("/dashboard",authentication,dashboard)

module.exports=router