const User = require('./User');
const Fighter = require('./Fighter');
const Style = require('./Style');

User.hasOne(Fighter, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Fighter.belongsTo(User, {
  foreignKey: 'user_id'
});

Fighter.hasOne(Style, {
  foreignKey: 'char_id',
  onDelete: 'CASCADE'
});

Style.belongsTo(Fighter, {
  foreignKey: 'char_id'
});

module.exports = { User, Fighter, Style };
