const { respondSuccess, respondErr } = require('../utils/responseUtils')

const processar = (req, res) => {
    console.log('******* CHEGOU NO POST');
    respondSuccess(res, 200, "Arquivo carregado com sucesso!")
}

module.exports = { processar }