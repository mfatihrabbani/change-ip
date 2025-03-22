# Dokumentasi Instalasi Auto Change Config Wireguard Via Api

## Prerequisitea

- Node Js versi 18
- Wireguard

## Langkah Langkah Instalasi

- Unduh file zip Instalasi dari [sini](https://github.com/mfatihrabbani/change-ip/archive/refs/heads/master.zip)
- Ekstrak terlebih dahulu file zip nya
- Buka terminal atau command prompt, kemudian navigasi ke direktori proyek yang sudah diunduh. (zip yang sudah di ekstrak)
- Jalankan perintah `npm install` untuk menginstal semua package yang diperlukan.
- Setelah sudah di install semua package melalui npm
- Jalankan proyek dengan perintah `npm start`.

## Langkah Langkah Set Lokasi File Wireguard
- Buka file `.env`
- Kemudian isi untuk keperluan environment (jika tidak ada buat terlebih dahulu)
```
PORT=3000
PATHWIREGUARD=C:\\Program Files\\WireGuard\\Data\\Configurations
```
- Isi file `.env` dengan ketentuan di atas
- Kemudian isi `PATHWIREUARD` sesuai dengan lokasi aplikasi wireguard di pc (penulisan path berdasarkan contoh di atas)
- Kemudian save
- Lalu jalankan aplikasi menggunakan perintah `npm start`

# Dokumentasi API

Berikut adalah dokumentasi API

## Change Config
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
    "message": "Success get config IP",
    "data": [
        "nameFile"
    ]
}
```




