module.exports = (sequelize, DataTypes) => {
    const login = sequelize.define("login", {
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    })
    return login;
  }