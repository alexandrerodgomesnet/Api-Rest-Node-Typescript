import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IParamProps } from '../../../models/interfaces';

export const Excluir = async(req: Request<IParamProps>, res: Response) => {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};