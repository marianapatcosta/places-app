import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createUserService = new CreateUserService();
    const userInfo = await createUserService.execute({ username, password });
    return response.json(userInfo);
  }
}

export { CreateUserController };
