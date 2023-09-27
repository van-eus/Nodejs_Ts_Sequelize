import sequelize from "../utils/database";
import { Employee } from "../types/employee"
import { DataTypes } from "sequelize";


const EmployeeModel = sequelize.define(
    'employees',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: 'employees',
        timestamps: true
    }
)

Employee.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: 'employees',
        timestamps: true,
      }
)

export default EmployeeModel;