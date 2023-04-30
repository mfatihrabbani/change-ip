import dotenv from "dotenv"
dotenv.config()

const environtment = {
    path : {
        wireguard : process.env.PATHWIREGUARD
    },
    server : {
        port : process.env.PORT
    }
}

export default environtment
