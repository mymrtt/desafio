'use strict';
module.exports = async function (sequelize, DataTypes) {
  await sequelize.sync();
  
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    cpf: DataTypes.DataTypes.DECIMAL(11,0),
    date_of_birth: DataTypes.DATE
  }, {
    timestamps: false
  });
  User.associate = function(models) {

  };
  const user = await User.findAll();
  console.log(user.map(e => e.get({ plain: true })));
  return User;
};