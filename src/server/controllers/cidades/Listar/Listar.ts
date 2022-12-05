import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IQueryProps } from '../../../models/interfaces';

export const Listar = async(req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};