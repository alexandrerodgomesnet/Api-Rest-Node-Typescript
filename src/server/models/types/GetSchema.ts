import { SchemaOf } from 'yup';

export type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>;