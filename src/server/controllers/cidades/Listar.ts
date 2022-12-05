import * as yup from 'yup';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IQueryProps } from '../../models/interfaces';
import { validation } from '../../shared/middleware';

export const listarValidation = validation((getSchema) =>({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().notRequired().moreThan(0),
        limit: yup.number().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    }))
}));

export const Listar = async(req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};