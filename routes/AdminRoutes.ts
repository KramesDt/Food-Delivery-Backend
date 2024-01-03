import express, {Request, Response, NextFunction} from "express"
import { CreateVendor, GetVendor, GetVendorById } from "../controllers/AdminController";

const router = express.Router();

router.get("/vendor", GetVendor)
router.get("/vendor/:id", GetVendorById)
router.post("/vendor", CreateVendor)

router.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.json("Hello Form the Admin ROuter")
})



export { router as AdminRoute}