import { Request, Response } from 'express';
import { UpdatePlaceService } from '../services/UpdatePlaceService';
import { IPlace } from '../types/IPlace';

class UpdatePlaceController {
  async handle(request: Request, response: Response) {
    const updatePlaceService = new UpdatePlaceService();
    const place: IPlace = await updatePlaceService.execute(request.params.placeId, request.body);
    return response.json(place);
  }
}

export { UpdatePlaceController };
