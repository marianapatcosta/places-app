import dotenv from 'dotenv';

dotenv.config();

const jwtKey = process.env.JWT_KEY;

export { jwtKey };
