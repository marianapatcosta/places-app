import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import 'express-async-errors';
import './database';
import { placesRouter } from './routes/places-routes';
import { userRouter } from './routes/user-routes';
import { HttpStatusCode } from './types/HTTPStatusCode';
import constants from './constants';

const { GENERAL_ERROR, ROUTE_NOT_FOUND_ERROR }: Readonly<any> = constants;
const DEFAULT_PORT: number = 8000;

const port: number = +process.env.PORT || DEFAULT_PORT;
const app: Application = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', placesRouter);
app.use('/api/v1', userRouter);

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((request: Request, response: Response, next: NextFunction) => {
  return response.status(HttpStatusCode.NOT_FOUND).json({
    error: ROUTE_NOT_FOUND_ERROR,
  });
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (request.file) {
      fs.unlink(request.file.path, error => console.log(error));
    }
    if (error instanceof Error) {
      return response.status(HttpStatusCode.BAD_REQUEST).json({
        error: error.message,
      });
    }

    return response
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: GENERAL_ERROR });
  }
);

app.listen(port, () => console.log('Server is running'));
