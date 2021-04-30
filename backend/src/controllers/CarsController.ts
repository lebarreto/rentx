import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getConnection, getRepository } from "typeorm";
import { uuid } from 'uuidv4';

import Cars from '../models/Cars';

export default class CarsController {
    async create(request: Request, response: Response):Promise<Response> {
        const { name, brand, daily_value } = request.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            brand: Yup.string().required(),
            daily_value: Yup.number().required(),
        });
        
        if (!(await schema.isValid(request.body))) {
			return response.status(400).json({ error: 'Validation fails.' });
        }

        const carExists = await getConnection()
            .createQueryBuilder()
            .select("cars.name")
            .from(Cars, 'cars')
            .where("cars.name = :name", { name })
            .getOne();

        if (carExists) {
            return response.status(400).json({ error: 'Car already exists.' });
        }

        const car = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Cars)
            .values([
                {
                    id: uuid(),
                    name,
                    brand,
                    daily_value
                },
            ])
            .execute();

        return response.json(car)
    }

    async update(request: Request, response: Response):Promise<Response> {
        const { name, brand, daily_value } = request.body;
        const { id } = request.params;

        const carExists = await getConnection()
            .createQueryBuilder()
            .select("cars.id")
            .from(Cars, 'cars')
            .where("cars.id = :id", { id })
            .getOne();

        if (!carExists) {
            return response.status(400).json({ error: 'This car does not exists.' });
        }

        
        const car = await getConnection()
            .createQueryBuilder()
            .update(Cars)
            .set({
                name,
                brand,
                daily_value
            })
            .where("id = :id", { id })
            .execute();

        return response.json(car)
    }

    async updateCarImage(request: Request, response: Response):Promise<Response> {
        const { id } = request.params;

        const carExists = await getConnection()
            .createQueryBuilder()
            .select("cars.id")
            .from(Cars, 'cars')
            .where("cars.id = :id", { id })
            .getOne();

        if (!carExists) {
            return response.status(400).json({ error: 'Car does not exists.' });
        }

        const car = await getConnection()
            .createQueryBuilder()
            .update(Cars)
            .set({ image: request.file.originalname })
            .where("id = :id", { id })
            .execute();

        return response.json(car)
    }

    async listAll(request: Request, response: Response): Promise<Response> {    
        const cars = await getRepository(Cars)
          .createQueryBuilder("cars")
          .getMany().then(e => e.map(car => {
            return {
              id: car.id,
              name: car.name,
              brand: car.brand,
              daily_value: car.daily_value,
              image: car.getImageUrl()
            }
          }));
    
        if (!cars) {
          return response.status(400).json({ error: 'Does not exists any cars.' });
        }
    
        return response.json(cars)
    }

    async listById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const car = await getRepository(Cars)
            .createQueryBuilder("cars")
            .where('id = :id', { id })
            .getMany().then(e => e.map(car => {
                return {
                    id: car.id,
                    name: car.name,
                    brand: car.brand,
                    daily_value: car.daily_value,
                    image: car.getImageUrl()
                }
            }));

        if (!car) {
            return response.status(400).json({ error: 'Does not exists any car with this ID.' });
        }

        return response.json(car)
    }

    async delete(request: Request, response: Response):Promise<Response> {
        const { id } = request.params;

        const carExists = await getConnection()
            .createQueryBuilder()
            .select("cars.id")
            .from(Cars, 'cars')
            .where("cars.id = :id", { id })
            .getOne();

        if (!carExists) {
            return response.status(400).json({ error: 'This car does not exists.' });
        }

        const car = await getConnection()
            .createQueryBuilder()
            .from(Cars, 'cars')
            .delete()
            .where("cars.id = :id", { id })
            .execute()

        return response.json(car)
    }
}