import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICidade } from '../../models/interfaces';
import { validation } from '../../shared/middleware';

export const adicionarValidation = validation((getSchema) =>({
    body: getSchema<ICidade>(yup.object().shape({
        descricao: yup.string().required().min(3)
    }))
}));

export const adicionar: RequestHandler = async(req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};