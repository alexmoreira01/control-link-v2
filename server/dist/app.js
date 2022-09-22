"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("./shared/container");

var _database = _interopRequireDefault(require("./database"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_database.default; // Conexão

const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.router);