let myFavorites = []

const postFav= (req,res) => {
    myFavorites.push(req.body)
    // res.writeHead(200, {"Content-Type":"application/json"})
    // res.end(JSON.stringify(myFavorites))
    /*return*/ res.status(200).json(myFavorites) //como es arrow function, el return ya está implícito. Si no era arow habría que poner el return antes del res.status...
}

const deleteFav = (req,res) => {
    const {id} = req.params
    console.log(myFavorites);
    const myFavorites = myFavorites.filter(fav => fav.id !== Number(id))
    res.status(200).json(myFavorites)
}

const getFav = (req,res) => {
    res.status(200).json(myFavorites)
}

module.exports = {postFav,deleteFav,getFav}