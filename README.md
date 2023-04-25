# Dokumentasi Instalasi Auto Change Config Wireguard

## Prerequisite

- Node Js versi 18

## Langkah Langkah Instalasi

- Unduh file zip Instalasi dari [sini](https://github.com/mfatihrabbani/change-ip/archive/refs/heads/master.zip)
- Ekstrak terlebih dahulu file zip nya
- Buka terminal atau command prompt, kemudian navigasi ke direktori proyek yang sudah diunduh. (zip yang sudah di ekstrak)
- Jalankan perintah `npm install` untuk menginstal semua package yang diperlukan.
- Setelah sudah di install semua package melalui npm
- Jalankan proyek dengan perintah `npm start`.

## Langkah Langkah Set Lokasi File Wireguard
- Buka file `./src/services/ipServices.js`
- Kemudian cari bagian
```javascript
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
```
- Nah pada bagian ini ganti sesuai dengan lokasi direktori wireguard di install (jangan menghapus \\ karena itu format dari cara penulisan powershell)
```
\\""C:\\Program Files\\WireGuard\\Data\\Configurations\\${fileName}.conf.dpapi"\"'
```
- Setelah itu save dan jalan kan kembali aplikasi Node js nya menggukan `npm start`

# Dokumentasi API

Berikut adalah dokumentasi API

## Change Conig 
Request:
 - Method : "GET"
 - Endpoint : "/change/:config"
 - Parameter : 
    - config : "nama config wireguard"
 - Headers :
    - Accept : application/json

Response
```json
{
    "status": "Success",
    "message": "Success change IP"
}
```

## Get All Config 
Request:
 - Method : "GET"
 - Endpoint : "/config"
 - Headers :
    - Accept : application/json

Response
```json
{
    "status": "Success",
    "message": "Success Success get config IP",
    "data": [
        "nameFile"
    ]
}
```




