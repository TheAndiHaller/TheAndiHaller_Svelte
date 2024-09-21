import { DataTypes, Model } from 'sequelize';
import { sequelize } from '$lib/server/database';

class Blogpost extends Model {
    declare key: string;
    declare title: string;
    declare text: string;
    declare language: string;
}

Blogpost.init({
    key: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
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
    modelName: 'Blogpost',
    tableName: 'blogpost'
});

export default Blogpost;