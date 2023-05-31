import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export class Apparel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public imageurl!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Apparel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'apparels',
    sequelize,
  }
);

export default Apparel;
