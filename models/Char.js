const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Char extends Model {}

Char.init(
  {
    id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'char',
  }
);

module.exports = Char;