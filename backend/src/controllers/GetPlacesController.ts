import { Request, Response } from 'express';
import { GetPlacesService } from '../services/GetPlacesService';

class GetPlacesController {
  async handle(request: Request, response: Response) {
    const getPlacesService = new GetPlacesService();
    const places = await getPlacesService.execute();
    return response.json(places);
  }
}

export { GetPlacesController };
