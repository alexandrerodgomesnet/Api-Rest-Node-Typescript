import { RequestHandler } from 'express';
import { TGetAllSchemas } from './GetAllSchemas';

export type TValidation = (getAllSchema: TGetAllSchemas) => RequestHandler;