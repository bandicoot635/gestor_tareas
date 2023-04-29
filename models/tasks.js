const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')

const Task = sequelize.define('Task', {

    id_task: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    completion_status: {
        type: DataTypes.STRING,
    },
    due_date: {
        type: DataTypes.DATE,
    },
    comments: {
        type: DataTypes.STRING,
    },
    assignee: {
        type: DataTypes.STRING,
    },
    tags: {
        type: DataTypes.STRING,
    },

})

module.exports = Task;