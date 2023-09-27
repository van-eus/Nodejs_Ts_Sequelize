import EmployeeModel from "../models/employee.model";
import { Employee } from "../types/employee"
import {Request, Response} from "express"

export const getAllEmployees= async(req:Request,res:Response)=>{
    try{
        let employees = await Employee.findAll();

        return res.status(200).json({
            data: employees
        })
    }
    catch(ex){
        return res.status(500).json({
            message: ex
        })
    }
}

export const registerEmployee = async(req:Request,res:Response)=>{
    try{
        let newEmployeeData:Employee = req.body as Employee

        console.log(newEmployeeData);
        let newEmployee = await EmployeeModel.create(newEmployeeData)

        return res.status(200).json({
            data: newEmployee
        })
    }
    catch(ex){
        return res.status(500).json({
            message: ex
        })
    }
}

export const getById = async(req:Request, res:Response)=>{
    try{
        const {id} = req.params;

        let employee = await Employee.findByPk(id)
        if(!employee) return res.status(404).json({
            message: "Employee not found"
        })

        return res.status(200).json({
            data: employee
        })
    }
    catch(ex){
        return res.status(500).json({
            message: ex
        })
    }
}

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Find the employee by ID
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        // Delete the employee record
        await employee.destroy();

        return res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch (ex) {
        return res.status(500).json({
            message: ex || "Internal Server Error"
        });
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedEmployeeData: Employee = req.body as Employee;

        // Find the employee by ID
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        // Update the employee record with the new data
        await employee.update(updatedEmployeeData);

        return res.status(200).json({
            message: "Employee updated successfully",
            data: employee
        });
    } catch (ex) {
        return res.status(500).json({
            message: ex || "Internal Server Error"
        });
    }
};


