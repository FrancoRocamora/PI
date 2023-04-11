const {Router} = require('express')
const getAllGames = require('../Controllers/GetAllGames')
const getGameDetails = require('../Controllers/GetGameDetails')
const getGameByNames = require('../Controllers/GetGamesByName')
const PostGame = require('../Controllers/PostGame')
const vgRouter = Router()


//Get requests
vgRouter.get('/', async (req, res) => {
    try {
        const response = await getAllGames()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

vgRouter.get('/:id', async (req, res) => {
    try {
        const response = await getGameDetails(2)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

vgRouter.get('/name?=', async (req, res) => {
    try {
        
        const response = await getGameByNames()
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Post requests
vgRouter.post('/', async (req, res) => {
    try {
        const data = req.body
        const response = await PostGame(data)
        res.status(400).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = vgRouter