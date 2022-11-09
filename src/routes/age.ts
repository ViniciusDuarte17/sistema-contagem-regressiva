import express from "express";
import { AgeFuture } from "../controller/AgeFuture";

export const routerAge = express.Router();

const ageFuture = new AgeFuture();

routerAge.get("/", ageFuture.returnAgeFuture)
