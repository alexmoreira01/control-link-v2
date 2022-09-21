import "reflect-metadata";
import "dotenv/config";

import express from "express";
import cors from 'cors';

import "./shared/container";
import AppDataSource from "./database";

import { router } from "./routes";

AppDataSource; // Conexão
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

export { app };