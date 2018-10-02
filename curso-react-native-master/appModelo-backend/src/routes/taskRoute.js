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
    .then(result => {console.log(result);
     respondSuccess(res, 200, result) })
    .catch(err => respondErr(res, 500, { errors: [`Consultar o task: ${err} `] }))
}

const insert = (req, res) => {
    let dataExtimada = req.body.estimateAt || null;
    dataExtimada = moment(dataExtimada).format('DD/MM/YYYY')
    console.log(`Dado sendo inserido: ${dataExtimada}`);
    let estimateAt = null
    if (dataExtimada) {
        let arrDataExtimada = dataExtimada.split('/');
        let stringFormatada = arrDataExtimada[1] + '-' + arrDataExtimada[0] + '-' +
        arrDataExtimada[2];
        estimateAt = new Date(stringFormatada);
    }

    let dataDoneAt = req.body.doneAt || null;
    let doneAt = null
    if (dataDoneAt) {
        let arrDataDoneAt = dataDoneAt.split('/');
        let stringFormatadaDone = arrDataDoneAt[1] + '-' + arrDataDoneAt[0] + '-' +
        arrDataDoneAt[2];
        doneAt = new Date(stringFormatadaDone);
    }

    serviceTask.insert(
        {
            desc: req.body.desc,
            estimateAt: estimateAt,
            doneAt: doneAt
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