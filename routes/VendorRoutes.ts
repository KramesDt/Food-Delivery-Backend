import express, {Request, Response, NextFunction} from "express"

const router = express.Router();

router.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.json("Hello Form the Vendor Router")
})


export { router as VendorRoute}