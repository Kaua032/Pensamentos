import { Model, DataTypes } from 'sequelize';

class Thought extends Model {
    static init(connection) {
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        )
    }
    
}

export default Thought;