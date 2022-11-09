import { Request, Response } from "express";

export class DayCountChristmas {

     returnCountDayChristmas(req: Request, res: Response) {
          let today = new Date();
          let christmasYear = today.getFullYear();

          if (today.getMonth() === 11 && today.getDate() > 25) {
               christmasYear = christmasYear + 1;
          }

          let christmasDate = new Date(christmasYear, 11, 25);
          let dayMilliseconds = 1000 * 60 * 60 * 24;

          let remainingDays = Math.ceil(
               (christmasDate.getTime() - today.getTime()) /
               (dayMilliseconds)
          );

          const hours = remainingDays * 24
          const minutes = hours * 60
          const seconds = minutes * 60

          res.status(200).send({
               message:
                   `Faltam ${remainingDays} dias, ${hours} hrs, ${minutes} minutos,${seconds} segundos, para o natal.`
           })
     }
}