import { Request, Response } from 'express';
import { CreatePlaceService } from '../services/CreatePlaceService';

class CreatePlaceController {
  async handle(request: Request, response: Response) {
    const createPlaceService = new CreatePlaceService();
    const place = request.body;
    if (request.file) {
      place.imageUrl = request.file.path;
    }
    const newPlace = await createPlaceService.execute(place);
    return response.json(newPlace);
  }
}

export { CreatePlaceController };
