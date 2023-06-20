

let myFavorites = []

const postFav= (req,res) => {
    myFavorites.push(req.body)
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(myFavorites))
    return res
}

const deleteFav = (req,res) => {
    const {id} = req.params
    myFavorites.filter(fav => fav.id !== id)
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(myFavorites))
    return res
}

module.exports = {postFav,deleteFav}