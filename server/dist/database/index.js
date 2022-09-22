"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Links = require("./entities/Links");

const AppDataSource = new _typeorm.DataSource({
  type: "mysql",
  host: process.env.Host,
  port: Number(process.env.Port),
  username: process.env.UserNameDb,
  password: process.env.Password,
  database: process.env.Database,
  entities: [_Links.Links],
  migrations: ["./dist/database/migrations/*.ts"] // migrations: ["./src/database/migrations/*.ts"]

});
AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
}).catch(err => {
  console.error("Error during Data Source initialization", err);
});
var _default = AppDataSource;
exports.default = _default;