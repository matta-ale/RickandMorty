const getCharById = require('../controllers/getCharById')
const getLogin = require('../controllers/login')
const {postFav,deleteFav} = require('../controllers/handleFavorites')
const express = require('express')
const Router = express.Router()

Router.get('/character/:id',(req,res) => {
    getCharById(req,res)
})

Router.get('/login',(req,res) => {
    getLogin(req,res)
})

Router.post('/fav',(req,res) => {
    postFav(req,res)
})

Router.delete('/fav/:id',(req,res) => {
    deleteFav(req,res)
})

module.exports = Router