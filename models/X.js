const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class X extends Model {}

X.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'x',
  }
);

module.exports = X;