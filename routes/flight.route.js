const express=require("express");
const { getflight, getflightbyID, postFlight, deleteFlightbyID, updateFlightfields } = require("../controllers/flights");
const authentication = require("../middleware/auth");
const router=express.Router();

router.get("/",authentication,getflight);
router.post("/",authentication,postFlight);
router.delete("/",authentication,deleteFlightbyID);
router.get("/:id",authentication,getflightbyID);
router.put("/:id",authentication,updateFlightfields)
router.patch("/:id",authentication,updateFlightfields)


module.exports=router