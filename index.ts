import express from "express";
import bodyParser from "body-parser";
import { AdminRoute, VendorRoute } from "./routes";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/admin", AdminRoute)
app.use("/vendor", VendorRoute)


app.use("/", (req, res)=>{
    res.json({success: "true", message:"Welcome to the food delivery service backend"})
})



app.listen(8000, ()=>{
    console.clear()
    console.log("Server is listening on PORT 8000")
})