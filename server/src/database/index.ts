// import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { Links } from "./entities/Links";

// dotenv.config({path: '../'})

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.Host,
    port: Number(process.env.Port),
    username: process.env.UserNameDb,
    password: process.env.Password,
    database: process.env.Database,
    entities: [Links],
    migrations: ["./src/database/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource