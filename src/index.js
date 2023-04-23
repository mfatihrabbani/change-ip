import express from "express"
import { changeIpController } from "./controllers/ipController.js"

const app = express()
app.use(express.json())

app.get("/change/:ip", changeIpController)

app.use("/", (err, req, res, next) => {
    if(err){
        const errorMessage = err.message || "Something Error"
        return res.status(400).json({status: "Failed", message: errorMessage}) 
    }
})

app.listen(3000, () => {
    console.log("Server change IP ON")
})