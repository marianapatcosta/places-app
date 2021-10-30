import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { UsersRepository } from '../repositories/UsersRepository';
import constants from '../constants';
import { jwtKey } from '../config';

const { EXISTING_USER_ERROR }: Readonly<any> = constants;

interface IAuthenticationRequest {
  username: string;
  password: string;
}

class CreateUserService {
  async execute({ username, password }: IAuthenticationRequest) {
    const userRepository = getCustomRepository(UsersRepository);

    const existingUser = await userRepository.findOne({ username });

    if (existingUser) {
      throw new Error(EXISTING_USER_ERROR);
    }
    const hashedPassword = await hash(password, 8);

    await userRepository.save({ username, password: hashedPassword });

    const user = await userRepository.findOne({ username });

    const token = sign({ username }, jwtKey, {
      subject: username,
      expiresIn: '1h',
    });

    return { id: user.id, username: user.username, token };
  }
}

export { CreateUserService };
