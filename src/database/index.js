const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Thought = require('../models/Thought.js');

const connection = new Sequelize(db);

Thought.init(connection);
console.log('Database Connected');

module.exports = connection;