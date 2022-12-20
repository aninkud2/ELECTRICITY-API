import { createcustomer ,getallcustomer, onecustomer,updatecustomer,delonecustomer} from "../Controller/nepacontroller.js";
import express from "express"
const router=express.Router()
//  route to create
router.post("/create",createcustomer)
// to get all 
router.get("/allcustomer",getallcustomer)
// to get one
router.get("/onecustomer/:id",onecustomer)
// to update
router.patch("/updatecustomer/:id",updatecustomer)
// to delete one
router.delete("/delone/:id",delonecustomer)

export default router