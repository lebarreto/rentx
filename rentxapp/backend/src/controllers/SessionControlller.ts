require("dotenv/config");

import * as Yup from 'yup';
import { Request, Response } from 'express';
import { getConnection } from "typeorm";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Users from '../models/Users';

export default class SessionController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6)
    });

    if (!(await schema.isValid(request.body))) {
	    return response.status(400).json({ error: 'Validation fails.' });
    }

    const userExists = await getConnection()
      .createQueryBuilder()
      .select("users")
      .from(Users, 'users')
      .where("users.email = :email", { email })
      .getOne();

    if (!userExists) {
      return response.status(400).json({ error: 'User does not exists.' });
    }

    const hashedPass = await bcrypt.hash(password, 8);

    const user = await bcrypt.compare(password, (await hashedPass).toString());

    if (!user) {
      return response.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ email, role: userExists.admin }, process.env.SECRET || 'default', {
      expiresIn: 1000
    })

    return response.json({auth: user, token})
  }
}