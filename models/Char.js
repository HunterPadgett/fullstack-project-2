const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Char extends Model {}

Char.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    style_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'style',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'char'
  }
);

module.exports = Char;
