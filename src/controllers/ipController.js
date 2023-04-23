import { changeIp } from "../services/ipServices.js";

export const changeIpController = async (req, res, next) => {
    const ip = req.params.ip
    try{
        const message = await changeIp(ip)
        res.status(200).json({status: "Success", message: message})
    }catch(error){
        return next(error)
    }
}