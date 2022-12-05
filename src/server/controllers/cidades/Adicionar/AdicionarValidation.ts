import * as yup from 'yup';
import { ICidade } from '../../../models';
import { validation } from '../../../shared/middleware';

export const AdicionarValidation = validation((getSchema) =>({
    body: getSchema<ICidade>(yup.object().shape({
        descricao: yup.string().required().min(3)
    }))
}));