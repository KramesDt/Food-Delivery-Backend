import express from "express";

const app = express();


app.use("/", (req, res)=>{
    res.json({success: "true", message:"Welcome to the food delivery service backend"})
})



app.listen(8000, ()=>{
    console.log("Server is listening on PORT 8000")
})