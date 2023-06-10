const getCharById = require('../src/controllers/getCharById')

const http = require('http')
const urlCharacterIdBase = '/rickandmorty/character'


http
    .createServer((req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); //esto es para que pueda acceder cualquiera (por eso el *)

        switch (true) {
            
            case req.url.includes(urlCharacterIdBase):
                const n = urlCharacterIdBase.length+1
                const id = Number(req.url.substr(n, req.url.length-n))
                return getCharById(res,id)
            default:
                return
        }
    })
    .listen(3001,'localhost')