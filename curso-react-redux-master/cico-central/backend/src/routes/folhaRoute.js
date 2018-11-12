const { respondSuccess, respondErr } = require('../utils/responseUtils')


const processar = (req, res) => {
    result = "Processamento concluído com sucesso!!!"
    respondSuccess(res, 200, result)
}

module.exports = { processar }