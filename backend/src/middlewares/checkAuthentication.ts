import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtKey } from '../config';
import { HttpStatusCode } from '../types/HTTPStatusCode';

interface IPlayload {
  userId: string;
}

export const checkAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (request.method === 'OPTIONS') {
    return next();
  }

  const [, token] = request.headers.authorization.split(' ');
  if (!token) {
    return response.status(HttpStatusCode.UNAUTHORIZED).end();
  }

  try {
    verify(token, jwtKey) as IPlayload;

    return next();
  } catch (error) {
    return response.status(HttpStatusCode.UNAUTHORIZED).end();
  }
};
