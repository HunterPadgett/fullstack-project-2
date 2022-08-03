const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fighter extends Model {}

Fighter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    char_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    char_name: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'fighter'
  }
);

module.exports = Fighter;
