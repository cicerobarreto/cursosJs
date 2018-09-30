const { respondSuccess, respondErr } = require('../utils/responseUtils')

const moment = require('moment')
const services = require('../services')
const serviceTask = services.taskService

const findByDate = (req, res) => {
    moment().locale()
    const date = req.query.date ? req.query.date 
        : moment().endOf('day').toDate()

    
    serviceTask.findByDate(date)
    .then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

const insert = (req, res) => {
    
    serviceTask.insert(
        {
            desc: req.body.desc,
            estimateAt: moment(req.body.estimateAt).format('YYYYMMDD')
        }
    )
    .then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

const remove = (req, res) => {
    
    serviceTask.remove(req.body)
    .then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

module.exports = { findByDate, insert, remove }