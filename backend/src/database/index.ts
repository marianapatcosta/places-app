import { createConnection } from 'typeorm';
import { Place } from '../entities/Place';
import { User } from '../entities/User';
import path from 'path'

//createConnection();
createConnection({
  type: 'sqlite',
  database: path.resolve(__dirname, '../database/database.sqlite'),
  entities: [User, Place],
  logging: true,
  synchronize: true,
})