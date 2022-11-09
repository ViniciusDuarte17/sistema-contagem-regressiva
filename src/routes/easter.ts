import express from "express";
import { CountDayToEaster } from "../controller/CountDayToEaster";

export const dayEaster = express.Router();

const countDayToEaster = new CountDayToEaster()

dayEaster.get("/", countDayToEaster.returnCountDayToEaster)