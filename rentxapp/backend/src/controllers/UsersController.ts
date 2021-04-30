import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getConnection, getRepository } from "typeorm";
import { uuid } from 'uuidv4';
import bcrypt from 'bcryptjs';

import Users from '../models/Users';

export default class UsersController {
    async createUser(request: Request, response: Response):Promise<Response> {
        const { name, email, password, admin } = request.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean().required(),
        });
        
        if (!(await schema.isValid(request.body))) {
			return response.status(400).json({ error: 'Validation fails.' });
        }

        const userExists = await getConnection()
            .createQueryBuilder()
            .select("users.email")
            .from(Users, 'users')
            .where("users.email = :email", { email })
            .getOne();

        if (userExists) {
            return response.status(400).json({ error: 'User already exists.' });
        }

        const hashedPass = await bcrypt.hash(password, 8);

        const user = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values([
                {
                    id: uuid(),
                    name,
                    email,
                    password: (await hashedPass).toString(),
                    admin,
                },
            ])
            .execute();

        return response.json(user)
    }

    async updateImage(request: Request, response: Response):Promise<Response> {
        const { id } = request.params;

        const userExists = await getConnection()
            .createQueryBuilder()
            .select("users.id")
            .from(Users, 'users')
            .where("users.id = :id", { id })
            .getOne();

        if (!userExists) {
            return response.status(400).json({ error: 'User does not exists.' });
        }

        const user = await getConnection()
            .createQueryBuilder()
            .update(Users)
            .set({ image: request.file.originalname })
            .where("id = :id", { id })
            .execute();

        return response.json(user)
    }

    async updateUser(request: Request, response: Response):Promise<Response> {
        const { name, password } = request.body;
        const { id } = request.params;

        const userExists = await getConnection()
            .createQueryBuilder()
            .select("users.id")
            .from(Users, 'users')
            .where("users.id = :id", { id })
            .getOne();

        if (!userExists) {
            return response.status(400).json({ error: 'User does not exists.' });
        }

        if (password) {
            const hashedPass = await bcrypt.hash(password, 8);

            const user = await getConnection()
                .createQueryBuilder()
                .update(Users)
                .set({
                    name,
                    password: (await hashedPass).toString(),
                })
                .where("id = :id", { id })
                .execute();
    
            return response.json(user)
        }
        else {
            const user = await getConnection()
                .createQueryBuilder()
                .update(Users)
                .set({
                    name,
                })
                .where("id = :id", { id })
                .execute();

            return response.json(user)
        }
        
    }

    async listAll(request: Request, response: Response): Promise<Response> {    
        const users = await getRepository(Users)
          .createQueryBuilder("users")
          .getMany().then(e => e.map(user => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              admin: user.admin,
              image_url: user.getAvatarUrl()
            }
          }));
    
        if (!users) {
          return response.status(400).json({ error: 'Does not exists any users.' });
        }
    
        return response.json(users)
    }

    async listById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const user = await getRepository(Users)
            .createQueryBuilder("users")
            .where('id = :id', { id })
            .getMany().then(e => e.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    admin: user.admin,
                    image_url: user.getAvatarUrl()
                }
            }));

        if (!user) {
            return response.status(400).json({ error: 'Does not exists any user with this ID.' });
        }

        return response.json(user)
    }
}