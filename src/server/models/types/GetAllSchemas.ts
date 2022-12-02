import { TAllSchemas } from './AllSchemas';
import { TGetSchema } from './GetSchema';

export type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;