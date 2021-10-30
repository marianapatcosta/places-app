import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { CreateUserController } from '../controllers/CreateUserController';

const userRouter = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController()

userRouter.post('/users/login', authenticateUserController.handle);

userRouter.post('/users/signup', createUserController.handle);

export { userRouter };
