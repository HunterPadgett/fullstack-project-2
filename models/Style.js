const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Style extends Model {}

Style.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    },
    char_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'char',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'char',
  }
);



module.exports = Style;