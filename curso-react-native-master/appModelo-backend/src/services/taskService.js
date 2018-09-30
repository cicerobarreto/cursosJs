const { Task } = require('../models')

const findByDate = date => {
    return Task.findOne({ estimateAt: date})
}

const insert = async (task) => {
    await Task.collection.insertOne(task)
    return task
}

const remove = async (task) => {
    await Task.collection.deleteOne(task)
    return task
}

module.exports = { findByDate, insert, remove }