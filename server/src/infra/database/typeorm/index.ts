import 'dotenv/config';

import { DataSource } from "typeorm";
import { Links } from "../../../application/entities/typeorm/Links";

console.log(process.env.HOST)

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT_DB),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Links],
    migrations: ["./dist/infra/database/typeorm/migrations/*.ts"]
    // migrations: ["./src/infra/database/typeorm/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
