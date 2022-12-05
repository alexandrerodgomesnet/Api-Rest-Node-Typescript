import * as yup from 'yup';
import { validation } from '../../../shared/middleware';
import { IQueryProps } from '../../../models/interfaces';

export const ListarValidation = validation((getSchema) =>({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    }))
}));