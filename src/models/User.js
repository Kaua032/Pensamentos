const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt')

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          validate: {
            len: [6, 50],
          },
        },
      },
      {
        sequelize: connection,
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
      }
    );
  }
}

module.exports = User;
