import { Server } from "http";
import sequelize, { connectDB } from "./utils/database";
import express from 'express';
import cors from 'cors';
import EmployeeRoutes from "./routes/employee.routes"

const app = express();

app
.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(EmployeeRoutes)

const PORT = process.env.PORT || 5000;

const server = new Server(app);

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
  await connectDB();
});
