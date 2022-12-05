import * as yup from 'yup';
import { validation } from '../../../shared/middleware';
import { IBodyProps, IParamProps } from '../../../models/interfaces';

export const AtualizarValidation = validation((getSchema) =>({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));