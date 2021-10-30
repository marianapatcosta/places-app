import { Router } from 'express';
import { CreatePlaceController } from '../controllers/CreatePlaceController';
import { GetPlacesController } from '../controllers/GetPlacesController';
import { UpdatePlaceController } from '../controllers/UpdatePlaceController';
import { DeletePlaceController } from '../controllers/DeletePlaceController';
import { checkAuthentication } from '../middlewares/checkAuthentication';
import { uploadImage } from '../middlewares/uploadImage';

const placesRouter = Router();
const createPlaceController = new CreatePlaceController();
const getPlacesController = new GetPlacesController();
const updatePlaceController = new UpdatePlaceController();
const deletePlaceController = new DeletePlaceController();

placesRouter.post(
  '/places',
  checkAuthentication,
  uploadImage.single('image'),
  createPlaceController.handle
);
placesRouter.get('/places', checkAuthentication, getPlacesController.handle);
placesRouter.patch(
  '/places/:placeId',
  checkAuthentication,
  updatePlaceController.handle
);
placesRouter.delete(
  '/places/:placeId',
  checkAuthentication,
  deletePlaceController.handle
);

export { placesRouter };
