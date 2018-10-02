const { Task } = require('../models')

const findByDate = date => {
    console.log(`data no service: ${date}`);
    
    return Task.find({ estimateAt: date })
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