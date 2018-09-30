const { respondSuccess, respondErr } = require('../utils/responseUtils')

const moment = require('moment')
const services = require('../services')
const serviceTask = services.taskService

const findByDate = (req, res) => {
    let dataExclusao = req.query.date;
    let arrDataExclusao = dataExclusao.split('/');

    let stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' +
    arrDataExclusao[2];
    let dateFiltro = new Date(stringFormatada);

    const date = dateFiltro ? dateFiltro 
        : moment().endOf('day').toDate()

    serviceTask.findByDate(date)
    .then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

const insert = (req, res) => {

    let dataExclusao = req.body.estimateAt;
    let arrDataExclusao = dataExclusao.split('/');

    let stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' +
    arrDataExclusao[2];
    let date = new Date(stringFormatada);
    console.log(`data formatada: ${date}`);
    serviceTask.insert(
        {
            desc: req.body.desc,
            estimateAt: date
        }
    )
    .then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

const remove = (req, res) => {
    
    let dataExclusao = req.body.estimateAt;
    let arrDataExclusao = dataExclusao.split('/');

    let stringFormatada = arrDataExclusao[1] + '-' + arrDataExclusao[0] + '-' +
    arrDataExclusao[2];
    let date = new Date(stringFormatada);
    console.log(`data formatada: ${date}`);
    serviceTask.remove(
        {
            desc: req.body.desc,
            estimateAt: date
        }
    ).then(result => respondSuccess(res, 200, result))
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

module.exports = { findByDate, insert, remove }