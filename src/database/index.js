import Sequelize from 'sequelize';
import db from '../config/database.js';
import Thought from '../models/Thought.js'

const connection = new Sequelize(db);

Thought.init(connection);
console.log('Database Connected');

export default connection;