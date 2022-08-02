import { Model, DataType } from "sequelize";
import db from "../db";

// modelo User

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: "users",
  }
);

export default User;
