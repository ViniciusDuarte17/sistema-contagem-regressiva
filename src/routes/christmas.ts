import express from "express";
import { DayCountChristmas } from "../controller/DayCountChristmas";


export const dayChristmas = express.Router();

const dayCountChristmas = new DayCountChristmas()

dayChristmas.get("/", dayCountChristmas.returnCountDayChristmas)