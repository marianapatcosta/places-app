import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import { PlacesRepository } from '../repositories/PlacesRepository';

class DeletePlaceService {
  async execute(placeId: string) {
    const placesRepository = getCustomRepository(PlacesRepository);
    const placeToDelete = await placesRepository.findOne(placeId);
    await placesRepository.remove(placeToDelete);

    if (this.isUploadedFile(placeToDelete.imageUrl)) {
      fs.unlink(placeToDelete.imageUrl, error => console.log(error));
    }
    return placeId;
  }

  isUploadedFile(url: string): boolean {
    return url?.includes('uploads\\images');
  }
}

export { DeletePlaceService };
