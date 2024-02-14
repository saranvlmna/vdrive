import express, { Express, Request, Response } from "express";
import { authRouter, serverRouter } from "./router";
const app: Express = express();

app.use("/", serverRouter);
app.use("/auth", authRouter);

export { app };
