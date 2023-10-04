const { Model, DataTypes } = require('sequelize');

class Thought extends Model {
    static init(connection) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                userId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: 'User',
                        key: 'id',
                    }
                }
            },
            {
                sequelize: connection
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user'})
    }
    
}

module.exports = Thought;