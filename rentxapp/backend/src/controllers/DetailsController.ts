import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getConnection, getRepository } from "typeorm";
import { uuid } from 'uuidv4';
import Details from '../models/Details';
import Cars from '../models/Cars';

export default class DetailsController {
    async create(request: Request, response: Response) {
        const { name, description, car_id, icon } = request.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            description: Yup.string().required(),
            car_id: Yup.string().required(),
            icon: Yup.string().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails.' });
        }

        const carExists = await getConnection()
            .createQueryBuilder()
            .select("cars.id")
            .from(Cars, 'cars')
            .where("cars.id = :car_id", { car_id })
            .getOne();

        if (!carExists) {
            return response.status(400).json({ error: 'Car does not exists.' });
        }

        const detail = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Details)
            .values([
                {
                    id: uuid(),
                    name: name,
                    description: description,
                    car_id: car_id,
                    icon: icon,
                },
            ])
            .execute();

        return response.json(detail)
    }

    async listByCarId(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const details = await getRepository(Details).find({
            where: {
                car_id: id,
            },
            relations: ['car'],
        })
    
        if (!details) {
            return response.status(400).json({ error: 'Does not exists any detail for this car.' });
        }

        return response.json(details)
    }
}