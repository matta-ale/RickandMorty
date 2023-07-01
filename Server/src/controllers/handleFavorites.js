let myFavorites = []

const postFav= (req,res) => {
    
    const foundFavorite = myFavorites.find(fav => fav.id === req.body.id)
    if (foundFavorite) {
        res.status(400).send('That character is already on favorites')
    } else {
    myFavorites.push(req.body)
    console.log(req.body)
    /*return*/ res.status(200).json(myFavorites) //como es arrow function, el return ya está implícito. Si no era arow habría que poner el return antes del res.status...
    }
}

const deleteFav = (req,res) => {
    const {id} = req.params
    myFavorites = myFavorites.filter(fav => fav.id !== Number(id))
    res.status(200).json(myFavorites)
}

const getFav = (req,res) => {
    res.status(200).json(myFavorites)
}

module.exports = {postFav,deleteFav,getFav}