import { getCustomRepository } from 'typeorm';
import { PlacesRepository } from '../repositories/PlacesRepository';

class GetPlacesService {
  async execute() {
    const placesRepository = getCustomRepository(PlacesRepository);

    const places = await placesRepository.find();

    return places;
  }
}

export { GetPlacesService };
