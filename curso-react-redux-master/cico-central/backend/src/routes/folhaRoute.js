const { respondSuccess, respondErr } = require('../utils/responseUtils')

const processar = (req, res) => {
    console.log(req.file);
    respondSuccess(res, 200, "Arquivo carregado com sucesso!")
}

module.exports = { processar }