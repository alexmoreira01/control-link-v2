import "reflect-metadata";
import "dotenv/config";

import express from "express";
import cors from 'cors';

import "./container";
import { AppDataSource } from "./database/typeorm/index";

import { router } from "./http/routes";

AppDataSource; // Conexão
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

export { app };