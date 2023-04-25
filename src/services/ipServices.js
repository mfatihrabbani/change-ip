import {exec} from "child_process"
import { validationError } from "../utils/validation.js"
import fs from "fs"

const shutdownCurrentConfig = (fileName) => {
    return new Promise((resolve, reject) => {
        exec(`wg show` ,(error, stdout, stderr) => {
            if(error){
                console.error(stderr)
                reject(new Error("Failed to shutdown current config"))
                return
            }
            const IP = stdout.split(":")[1]
            if(typeof IP !== 'undefined'){
                const match = IP.match(/\d+/)
                if(IP == fileName) {
                    reject(new Error("This config already running"))
                    return
                }
                if (match) {
                    const num = parseInt(match[0])
                    exec(`Start-Process -Verb RunAs powershell.exe -Args '-ExecutionPolicy Bypass -command wireguard /uninstalltunnelservice ${num}'`, {'shell':'powershell.exe'},(error, stdout, stderr) => {
                        if (error == null){
                            console.log("Success to shutdown current config")
                            resolve("Success to shutdown current config")
                        }else{
                            console.log("Failed to shutdown current config")
                            reject(new Error("Failed to shutdown current config"))
                        }
                    })
                }else{
                    console.log("No config running")
                    resolve("No config running")
                    return
                }
            }else{
                console.log("No config running")
                resolve("No config running")
                return
            }
        })
    })
}

const changeConfig = (fileName) => {
    return new Promise((resolve, reject) => {
        exec(`Start-Process -Verb RunAs powershell.exe -Args '-ExecutionPolicy Bypass -command wireguard /installtunnelservice \\""C:\\Program Files\\WireGuard\\Data\\Configurations\\${fileName}.conf.dpapi"\"'`, {'shell':'powershell.exe'},(error, stdout, stderr) => {
            console.log(`Running config ${fileName}`)
            if (error){
                console.log(stderr)
                console.log("Failed change IP")
                reject(new Error("Failed to change IP"))
                return
            }
            console.log("Success change IP")
            return resolve('Success change IP') 
        })
    })
}

const getAllFileConfig = async () => {
    const files = await fs.promises.readdir("C:\\Program Files\\WireGuard\\Data\\Configurations")
    const fileNames = []

    for (let file of files){
        if(file.includes("conf.dpapi")){
            let newFile = file.replace(".conf.dpapi", "")
            fileNames.push(newFile)
        }
    }
    return fileNames
}

export const changeIp = async (fileName) => {
    if (fileName == null){
        validationError("Parameter cannot null")
    }
    const shutdown = await shutdownCurrentConfig(fileName)
    const change = await changeConfig(fileName)
    return change
}

getAllFileConfig()