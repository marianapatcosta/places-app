import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { UsersRepository } from '../repositories/UsersRepository';
import constants from '../constants';
import { jwtKey } from '../config';

const { AUTHENTICATION_ERROR }: Readonly<any> = constants;

interface IAuthenticationRequest {
  username: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ username, password }: IAuthenticationRequest) {
    const userRepository = getCustomRepository(UsersRepository);
    const user = await userRepository.findOne({ username });
   
    if (!user) {
      throw new Error(AUTHENTICATION_ERROR);
    }
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error(AUTHENTICATION_ERROR);
    }

    const token = sign({ username: user.username }, jwtKey, {
      subject: user.username,
      expiresIn: '1h',
    });

    return { id: user.id, username: user.username, token };
  }
}

export { AuthenticateUserService };
