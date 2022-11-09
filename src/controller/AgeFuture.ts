import { Request, Response } from "express";


export class AgeFuture {

    returnAgeFuture(req: Request, res: Response) {
        try {
            const age = Number(req.query.age);

            if (!age) {
                throw new Error("Passa a idade na query da url");
            }

            const currentData = new Date()
            const year = currentData.getFullYear()
            const yearBirth = year - age

            const yearFuture = 2100

            const ageFuture = yearFuture - yearBirth

            res.status(200).send({ message: `Em 2100 sua idade será ${ageFuture} anos` })
        } catch (error: any) {
            res.status(422).send({ Error: error.message })
        }
    }
}