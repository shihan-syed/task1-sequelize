module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
      id:{primaryKey :true,
        type:DataTypes.INTEGER,
        allowNull:false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Todo;
  };
  