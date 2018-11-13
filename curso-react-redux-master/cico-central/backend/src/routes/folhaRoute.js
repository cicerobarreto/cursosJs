const { respondSuccess, respondErr } = require('../utils/responseUtils')
const path = require('path');

const processar = (req, res) => {

    
    var exec = require('child_process').exec, child;
    child = exec('java -jar c:\\calculo\\Sibe2GercredSlaveEjbTesteFuncional.jar',
    function (error, stdout, stderr){
        respondSuccess(res, 200, stdout)
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if(error !== null){
        console.log('exec error: ' + error);
        }
    });
    
}

module.exports = { processar }