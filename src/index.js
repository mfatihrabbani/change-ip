import express from "express"
import { changeIpController, getAllFileConfigController } from "./controllers/ipController.js"
import environtment from "./environtment.js"

const app = express()
app.use(express.json())

app.get("/change/:ip", changeIpController)
app.get("/config", getAllFileConfigController)

app.use("/", (err, req, res, next) => {
    if(err){
        const errorMessage = err.message || "Something Error"
        return res.status(400).json({status: "Failed", message: errorMessage}) 
    }
})

app.listen(environtment.server.port, () => {
    console.log(`Server run on port ${environtment.server.port}`)
})