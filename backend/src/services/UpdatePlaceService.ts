import { getCustomRepository } from 'typeorm';
import { PlacesRepository } from '../repositories/PlacesRepository';
import { IPlace } from '../types/IPlace';

class UpdatePlaceService {
  async execute(placeId: string, place: IPlace) {
    const placesRepository = getCustomRepository(PlacesRepository);

    const placeToUpdate = await placesRepository.findOne(placeId);
    const updatedPlace = await placesRepository.save({
      ...placeToUpdate,
      ...place,
    });
    return updatedPlace;
  }
}

export { UpdatePlaceService };
