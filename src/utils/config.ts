import { config } from "dotenv";
import path from "path";
config({ path: path.resolve(__dirname, "../../.env") });

export let db_host: string;
export let db_name: string;
export let db_user: string;
export let db_password: string;

db_host = String(process.env.DB_HOST);
db_name = String(process.env.DB_NAME);
db_user = String(process.env.DB_USER);
db_password = String(process.env.DB_PASSWORD);
