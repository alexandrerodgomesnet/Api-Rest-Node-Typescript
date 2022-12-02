import { RequestHandler } from 'express';
import * as yup from 'yup';
import { ICidade, IFilter } from '../../models';
import { validation } from '../../shared/middleware';

export const createValidation = validation((getSchema) =>({
    body: getSchema<ICidade>(yup.object().shape({
        descricao: yup.string().required().min(3)
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3)
    }))
}));

export const adicionar: RequestHandler = async(req, res) => {


    return res.send(req.body.descricao);
};