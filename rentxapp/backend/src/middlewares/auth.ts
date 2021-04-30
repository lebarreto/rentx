require("dotenv/config");

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface IDecoded { 
    header: {
        alg: string;
        typ: string;
    },
    payload: {
        email: string;
        role: boolean;
        iat: number;
        exp: number;
    },
    signature: string;
}

export default async (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [bearer, token] = authHeader.split(' ');

  try {
    const decoded:IDecoded = jwt.decode(token, {complete: true}) as any;
    request.role = decoded.payload.role;
    request.email = decoded.payload.email;
    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Invalid token' });
  }
};