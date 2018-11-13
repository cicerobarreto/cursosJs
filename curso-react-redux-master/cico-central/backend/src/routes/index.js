const express = require('express')
const multer = require('multer')

const authRoute = require('./authRoute')
const taskRoute = require('./taskRoute')
const messageRoute = require('./messageRoute')
const folhaRoute = require('./folhaRoute')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, join(__dirname, '../../../uploadArq/'));
        //cb(null, join(__dirname, './uploadImgs/'));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    // reject a file
    
};
//var limits = { fileSize: 0.5 * 1024 * 1024 };
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1024
    },
    fileFilter: fileFilter,
});

/*
 * Rotas abertas
 */
const oapi = express.Router()
oapi.post('/login', authRoute.login)
oapi.post('/validateToken', authRoute.validateToken)
oapi.post('/signup', authRoute.save)
oapi.post('/folhaProcessar',upload.single('files') ,folhaRoute.processar)

/**
 * Rotas seguras
 */
const api = express.Router()
api.use(authRoute.auth)
api.use('/tasks',taskRoute.findByDate)
api.use('/insertTask',taskRoute.insert)
api.use('/updateTask',taskRoute.update)
api.use('/removeTask',taskRoute.remove)
api.use('/messages',messageRoute.findByDate)
api.use('/insertMessage',messageRoute.insert)
api.use('/removeMessage',messageRoute.remove)
api.use('/removeMessageUser',messageRoute.removeMsgUser)

module.exports = { oapi, api }