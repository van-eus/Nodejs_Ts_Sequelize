import { Model } from "sequelize";

export class Employee extends Model{
    public id!:string;
    public name!:string;
    public age?:number;
    [key: number]: any;
    [key: symbol]: any;
}