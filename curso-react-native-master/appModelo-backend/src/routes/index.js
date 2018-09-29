const express = require('express')
const authRoute = require('./authRoute')

/*
 * Rotas abertas
 */
const oapi = express.Router()
oapi.post('/login', authRoute.login)
oapi.post('/validateToken', authRoute.validateToken)
oapi.post('/signup', authRoute.save)

/**
 * Rotas seguras
 */
const api = express.Router()
api.use(authRoute.auth)

module.exports = { oapi, api }