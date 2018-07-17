const express = require('express')

module.exports = function (server) {

    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api',router)

    //Rotas de Ciclo de Pagamento
    const BillinCycle = require('../api/billingCycle/billingCycleService')
    BillinCycle.register(router,'/billingCycles')
}