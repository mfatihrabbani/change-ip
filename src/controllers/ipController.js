import { changeIp, getAllFileConfig } from "../services/ipServices.js";

export const changeIpController = async (req, res, next) => {
    const ip = req.params.ip
    try{
        const message = await changeIp(ip)
        res.status(200).json({status: "Success", message: message})
    }catch(error){
        console.log(error)
        return next(error)
    }
}

export const getAllFileConfigController = async (req, res, next) => {
    try{
        const configs = await getAllFileConfig()
        res.status(200).json({status: "Success", message: "Success get config", data : configs})
    }catch(error){
        console.log(error)
        return next(error)
    }
}