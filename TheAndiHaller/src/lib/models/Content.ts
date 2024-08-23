// src/lib/models/Content.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '$lib/database';

console.log('Initializing Content model...');

class Content extends Model {
  public id!: number;
  public key!: string;
  public language!: string;
  public text!: string;
}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'content',
  }
);

export default Content;
