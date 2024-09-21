// src/lib/models/Content.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '$lib/server/database';

class Content extends Model {
  declare key: string;
  declare text: string;
  declare language: string;
}

Content.init({
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Content',
  tableName: 'content'
});

export default Content;