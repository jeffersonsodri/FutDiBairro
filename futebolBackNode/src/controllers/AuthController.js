const express = require('express')

const User = require('../models/user')

const router = express.Router()


router.post('/registerUser', async (req, res) => {
    try{
        const user = User.create(req.body)

        return res.send({user})

    }
    catch (err){
        return res.status(400).send({ error: 'Falha ao registrar o Usuário!'})
    }
})


module.exports = app => app.use('/auth', router)