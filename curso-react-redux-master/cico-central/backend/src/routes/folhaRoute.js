const { respondSuccess, respondErr } = require('../utils/responseUtils')

const processar = (req, res) => {
    console.log('******* CHEGOU NO POST');
    console.log('******* IMAGE FILE:');
    console.log('dir = ', __dirname);
    console.log(res.file);
    respondSuccess(res, 200, result)
}

module.exports = { processar }