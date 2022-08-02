import { Model, DataTypes } from "sequelize";
import db from "../db";

//-- Modelo Tweet
class Tweet extends Model {}
Tweet.init(
  {
    message: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    tableName: "tweets",
  }
);

export default Tweet;
