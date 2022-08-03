const User = require('./User');
const Char = require('./Char');
const Style = require('./Style');

User.hasOne(Char, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Char.belongsTo(User, {
  foreignKey: 'user_id'
});

Char.hasOne(Style, {
  foreignKey: 'char_id',
  onDelete: 'CASCADE'
});

Style.belongsTo(Char, {
  foreignKey: 'char_id'
});

module.exports = { User, Char, Style };
