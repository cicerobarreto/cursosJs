const express = require('express')
const multer = require('multer')
const uuidv4 = require('uuid/v4');
const path = require('path');

const authRoute = require('./authRoute')
const taskRoute = require('./taskRoute')
const messageRoute = require('./messageRoute')
const folhaRoute = require('./folhaRoute')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  
  const upload = multer({ storage });

/*
 * Rotas abertas
 */
const oapi = express.Router()
oapi.post('/login', authRoute.login)
oapi.post('/validateToken', authRoute.validateToken)
oapi.post('/signup', authRoute.save)
oapi.post('/folhaProcessar',upload.single('selectedFile') ,folhaRoute.processar)

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