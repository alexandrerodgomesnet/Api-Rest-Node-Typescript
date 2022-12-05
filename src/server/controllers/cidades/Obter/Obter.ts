import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IParamProps } from '../../../models/interfaces';

export const Obter = async(req: Request<IParamProps>, res: Response) => {
    console.log(req.params);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};