const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { respondSuccess, respondErr } = require('../utils/responseUtils')

const services = require('../services')
const servie = services.userService

const auth = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next()
	} else {
		var token = req.body.token || req.query.token || req.headers['authorization'] || ''
		token = token.split(' ')[1]
		if (!token) {
			respondErr(res, 403, { errors: ['Nenhum token encontrado'] })
		} else {
			jwt.verify(token, process.env.AUTH_SECRET, function (err, decoded) {
				if (err) {
					respondErr(res, 403, { errors: ['Falha ao verificar o token'] })
				} else {
					req.payload = decoded
					next()
				}
			})
		}
	}
}

const login = (req, res) => {

	const username = req.body.username || ''
	const password = req.body.password || ''

	servie.findByUsername(username).then(user => {
		if (user && bcrypt.compareSync(password, user.password)) {
			const token = jwt.sign({ username: user.username, role: user.role }, process.env.AUTH_SECRET, { expiresIn: "7 days" })
			respondSuccess(res, 200, { token })
		} else {
			respondErr(res, 500, { errors: ['Usuário/Senha inválidos'] })
		}
	}).catch(err => {
		respondErr(res, 500, { errors: ['Erro ao conectar com o banco de dados'] })
	})
}

const obterHash = (password, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
	})
}

const save = (req, res) => {
	console.log(`Senha antes: ${req.body.password}`);
	
	obterHash(req.body.password, hash => {
		console.log(`Senha depois: ${hash}`);
		const password = hash
		servie.insert({username: req.body.username, password: password })
	})
}

const validateToken = (req, res) => {
	var token = req.body.token || req.query.token || req.headers['authorization'] || ''
	token = token.split(' ')[1]
	jwt.verify(token, env.authSecret, (err, decoded) => {
		respondSuccess(res, 200, { valid: !err })
	})
}

module.exports = { auth, login, validateToken, save }