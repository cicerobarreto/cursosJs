const { User } = require('../models')

const findByUsername = name => {
    return User.findOne({ username: name})
}

const insert = async (user) => {
    const result = await User.collection.insertOne(user)
    return result
}

module.exports = { findByUsername, insert }