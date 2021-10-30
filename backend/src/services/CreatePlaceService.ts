import { getCustomRepository } from 'typeorm';
import { PlacesRepository } from '../repositories/PlacesRepository';
import { IPlace } from '../types/IPlace';

class CreatePlaceService {
  async execute(place: IPlace) {
    try {
      const placesRepository = getCustomRepository(PlacesRepository);
      const newPlace = await placesRepository.save(place);
      return newPlace;
    } catch (error) {
      throw error;
    }
  }
}

export { CreatePlaceService };
