import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config.js';

export const Product = sequelize.define("Product", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    description: {

        type:DataTypes.STRING,
        allowNull: false
    },
    image: {
        type:DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type:DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    details: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {
    // model options
    timestamps: false
  })

export default Product