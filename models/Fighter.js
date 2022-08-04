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
    fighter_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fighter_name: {
      type: DataTypes.STRING,
      allowNull: false
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
