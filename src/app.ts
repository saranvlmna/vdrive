import express, { Express, Request, Response } from "express";
import { serverRouter } from "./router";
const app: Express = express();

app.use("/", serverRouter);

export { app };
