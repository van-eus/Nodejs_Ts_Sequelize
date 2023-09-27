import { Router } from "express";
import { getById, getAllEmployees, registerEmployee, deleteEmployee, updateEmployee } from "../controllers/employee.controller";

const router = Router();

router.get("/employees",getAllEmployees)

router.post("/employees/new",registerEmployee)

router.get("/employees/:id",getById)

router.delete("/employee/:id",deleteEmployee)

router.put("/employee/:id",updateEmployee )

export default router
