import * as yup from 'yup';
import { validation } from '../../../shared/middleware';
import { IParamProps } from '../../../models/interfaces';

export const ExcluirValidation = validation((getSchema) =>({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));