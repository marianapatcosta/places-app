import { EntityRepository, Repository } from 'typeorm';
import { Place } from '../entities/Place';

@EntityRepository(Place)
class PlacesRepository extends Repository<Place> {}

export { PlacesRepository };
