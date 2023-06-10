const http = require('http')
const urlCharacterIdBase = '/rickandmorty/character'
const data = require('./utils/data')

http
    .createServer((req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); //esto es para que pueda acceder cualquiera (por eso el *)

        switch (true) {
            
            case req.url.includes(urlCharacterIdBase):
                const n = urlCharacterIdBase.length+1 //calculo el n para la función substract
                const id = Number(req.url.substr(n, req.url.length-n)) //saco el id de la req, lo paso a Number
                const character = data.filter((char) => char.id === id)
                res.writeHead(200, {"Content-Type":"application/json"})
                return res.end(JSON.stringify(character[0]))
            default:
                return
        }
    })
    .listen(3001,'localhost')