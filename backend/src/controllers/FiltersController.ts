import { Request, Response } from 'express';
import { getRepository, ILike } from "typeorm";

import Cars from '../models/Cars';
import Details from '../models/Details';
import Rentals from '../models/Rentals';

export default class FiltersController {
    async availabilityFilter(request: Request, response: Response) {
        const { start_date, end_date } = request.query;

        const notAvailable = await getRepository(Cars)
            .createQueryBuilder('cars')
            .leftJoin(Rentals, 'rentals', 'rentals.car_id = cars.id')
            .where(`rentals.start_date >= ${start_date} and rentals.end_date <= ${end_date}`)
            .getMany()
        
        const ids = notAvailable.map(ids => ids.id);

        if (ids.length) {
            const availability = await getRepository(Cars)
            .createQueryBuilder('cars')
            .where('cars.id <> (:...ids)', { ids: ids })
            .getMany().then(e => e.map(car => {
                return {
                  id: car.id,
                  name: car.name,
                  brand: car.brand,
                  daily_value: car.daily_value,
                  image: car.getImageUrl()
                }
              }));

            if (!availability) {
                return response.status(400).json({ error: 'Does not exists any car available for this date.' });
            }

            return response.json(availability)
        }
        else {
            const availability = await getRepository(Cars)
            .createQueryBuilder('cars')
            .getMany().then(e => e.map(car => {
                return {
                  id: car.id,
                  name: car.name,
                  brand: car.brand,
                  daily_value: car.daily_value,
                  image: car.getImageUrl()
                }
              }));

            if (!availability) {
                return response.status(400).json({ error: 'Does not exists any car available for this date.' });
            }

            return response.json(availability)
        }
    }

    async nameFilter(request: Request, response: Response) {
        const { car_name } = request.query;

        const car = await getRepository(Cars).find({
            name: ILike(`%${car_name}%`)
        });

        if (!car) {
            return response.status(400).json({ error: 'Does not exists any car with this name.' });
        }

        return response.json(car)
    }

    async priceFilter(request: Request, response: Response) {
        const { min_price, max_price } = request.query;

        const cars = await getRepository(Cars)
            .createQueryBuilder('cars')
            .where('cars.daily_value >= :min_price and cars.daily_value <= :max_price', { min_price, max_price})
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
            return response.status(400).json({ error: 'Does not exists any cars in this value range.' });
        }

        return response.json(cars)
    }

    async fuelFilter(request: Request, response: Response) {
        const { fuel } = request.query;

        const cars = await getRepository(Details).find({
            where: {
                description: fuel
            },
            relations: ['car'],
        })

        if (!cars) {
            return response.status(400).json({ error: 'Does not exists any cars with this type of fuel.' });
        }

        return response.json(cars)
    }

    async transmissionFilter(request: Request, response: Response) {
        const { transmission } = request.query;

        const cars = await getRepository(Details).find({
            where: {
                description: transmission
            },
            relations: ['car'],
        })

        if (!cars) {
            return response.status(400).json({ error: 'Does not exists any cars with this type of transmission.' });
        }

        return response.json(cars)
    }
}