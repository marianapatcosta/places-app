import { Request } from 'express';
import multer, { StorageEngine, Multer } from 'multer';
import { nanoid } from 'nanoid';
import constants from '../constants';

const { MIME_TYPE_ERROR }: Readonly<any> = constants;

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
};

const diskStorage: StorageEngine = multer.diskStorage({
  destination: (request: Request, file: Express.Multer.File, cb) => {
    if (!file) return;
    cb(null, 'uploads/images');
  },
  filename: (request: Request, file: Express.Multer.File, cb) => {
    const fileExtension = MIME_TYPE_MAP[file.mimetype];
    cb(null, `${nanoid()}.${fileExtension}`);
  },
});

const fileValidator = (request: Request, file: Express.Multer.File, cb): void => {
  const isValid = !!MIME_TYPE_MAP[file.mimetype];
  let error = isValid ? null : new Error(MIME_TYPE_ERROR);
  cb(error, isValid);
};

export const uploadImage = multer({
  storage: diskStorage,
  limits: { fileSize: 5000000 },
  fileFilter: fileValidator,
}) as Multer;
