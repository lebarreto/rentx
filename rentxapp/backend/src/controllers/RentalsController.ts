import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getConnection, getRepository } from "typeorm";
import { uuid } from 'uuidv4';

import Rentals from '../models/Rentals';

export default class RentalsController {
    async create(request: Request, response: Response) {
        const { client_id, car_id, start_date, end_date } = request.body;

        const schema = Yup.object().shape({
            client_id: Yup.string().required(),
            car_id: Yup.string().required(),
            start_date: Yup.date().required(),
            end_date: Yup.date().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails.' });
        }

        const rentalExists = await getConnection()
            .createQueryBuilder()
            .select("rentals")
            .from(Rentals, 'rentals')
            .where("rentals.car_id = :car_id and rentals.client_id = :client_id", { car_id, client_id })
            .getOne();

        if (rentalExists) {
            return response.status(400).json({ error: 'Rental already exists.' });
        }

        const rental = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Rentals)
            .values([
                {
                    id: uuid(),
                    start_date,
                    end_date,
                    car_id,
                    client_id,
                },
            ])
            .execute();

        return response.json(rental)
    }

    async listByClientId(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const rentals = await getRepository(Rentals).find({
            where: {
                client_id: id,
            },
            relations: ['car'],
        })

        if (!rentals) {
            return response.status(400).json({ error: 'Does not exists any rental for this client.' });
        }

        return response.json(rentals)
    }

    async listAll(request: Request, response: Response): Promise<Response> {
        const rentals = await getRepository(Rentals).find({
            relations: ['car'],
        })

        if (!rentals) {
            return response.status(400).json({ error: 'Does not exists any rental.' });
        }

        return response.json(rentals)
    }
}