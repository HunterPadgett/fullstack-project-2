const User = require('./User');
const Char = require('./Char');
const Style = require('./Style');

User.hasOne(Char, {
  foreignKey: 'char_id',
});

module.exports = { User, Char, Style };
