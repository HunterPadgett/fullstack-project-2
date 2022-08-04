const User = require('./User');
const Fighter = require('./Fighter');

User.hasOne(Fighter, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Fighter.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Fighter};
