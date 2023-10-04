const Sequelize = require('sequelize');
const db = require('../config/database.js');
const Thought = require('../models/Thought.js');
const User = require('../models/User.js');

const connection = new Sequelize(db);

Thought.init(connection);
User.init(connection);
console.log('Database Connected');

module.exports = connection;