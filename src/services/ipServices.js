import {exec} from "child_process"
import { validationError } from "../utils/validation.js"

export const changeIp = async (fileName) => {
    if (fileName == null){
        throw validationError("Parameter cannot null")
    }
    await exec(`Start-Process -Verb RunAs powershell.exe -Args '-ExecutionPolicy Bypass -command wireguard /installtunnelservice \\""C:\\Program Files\\WireGuard\\Data\\Configurations\\${fileName}.conf.dpapi"\"'`, {'shell':'powershell.exe'},(error, stdout, stderr) => {
        if (error == null){
            console.log("Success change IP")
            return 'Success change IP'
        }
        console.log(stderr)
        console.log("Failed change IP")
        throw validationError("Failed to change IP")
    })
}