import { Request, Response, NextFunction } from 'express';

export default async (request: Request, response: Response, next: NextFunction) => {
    if(request.role){
        next();
    } else{
        response.status(403).send();
    }
};