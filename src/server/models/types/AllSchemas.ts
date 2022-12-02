import { SchemaOf } from 'yup';
import { FieldValidation } from '../enums';

export type TAllSchemas = Record<FieldValidation, SchemaOf<any>>;