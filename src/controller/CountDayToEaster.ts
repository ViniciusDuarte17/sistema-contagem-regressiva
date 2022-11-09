import { Request, Response } from "express";


export class CountDayToEaster {

    async returnCountDayToEaster(req: Request, res: Response) {
        const data = new Date()
        let EasterYear = data.getFullYear()

        let year = new Date(data.getTime() - (data.getDay() * 24 * 60 * 60 * 1000))
        let newYear = year.getFullYear()
        let newDay = year.getDay()
        let newMonth = year.getMonth()

        let X = 24;
        let Y = 5;
        let a = newYear % 19;
        let b = newYear % 4;
        let c = newYear % 7;
        let d = (19 * a + X) % 30
        let e = (2 * b + 4 * c + 6 * d + Y) % 7
        let soma = d + e

        if (soma > 9) {
            newDay = (d + e - 9)
            newMonth = 3;
        }

        if (data.getMonth() > newMonth) {
            EasterYear = EasterYear + 1;
            newYear = newYear + 1;

            let X = 24;
            let Y = 5;
            let a = newYear % 19;
            let b = newYear % 4;
            let c = newYear % 7;
            let d = (19 * a + X) % 30
            let e = (2 * b + 4 * c + 6 * d + Y) % 7
            let soma = d + e
            if (soma > 9) {
                newDay = (d + e - 9)
                newMonth = 3;
            }
        }

        let EasterDate = new Date(EasterYear, newMonth, newDay);
        let dayMilliseconds = 1000 * 60 * 60 * 24;

        let remainingDays = Math.ceil(
            (EasterDate.getTime() - data.getTime()) / dayMilliseconds
        );

        const hours = remainingDays * 24
        const minutes = hours * 60
        const seconds = minutes * 60

        res.status(200).send({
            message:
                `Faltam ${remainingDays} dias, ${hours} hrs, ${minutes} minutos,${seconds} segundos, para o pascoa.`
        })
    }
}