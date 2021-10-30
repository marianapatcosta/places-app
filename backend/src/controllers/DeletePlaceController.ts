import { Request, Response } from 'express';
import { DeletePlaceService } from '../services/DeletePlaceService';

class DeletePlaceController {
  async handle(request: Request, response: Response) {
    const deletePlaceService = new DeletePlaceService();
    const placeId: string = await deletePlaceService.execute(
      request.params.placeId
    );
    return response.json(placeId);
  }
}

export { DeletePlaceController };
