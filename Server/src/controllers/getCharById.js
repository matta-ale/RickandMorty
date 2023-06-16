const axios = require('axios')

const fullfilled = (response,res) => {
        const {id,name,gender,species,origin,image,status} = response.data
        const charObj =  {
            id:id,
            name:name,
            gender:gender,
            species: species,
            origin: origin,
            image: image,
            status: status
        }
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(charObj))
        return res
    }

function getCharById(res,id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => fullfilled(response,res))
        .catch((reason) => {
            res.writeHead(500,{"Content-Type":'text/plain'}) //para qué pongo status 500 si si le pongo otro código cuando falla igual me tira status 500?
            res.end(reason.message)
            return res
        })
    }

module.exports=getCharById