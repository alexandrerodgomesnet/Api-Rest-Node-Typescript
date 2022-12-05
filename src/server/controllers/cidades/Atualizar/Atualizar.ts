import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IBodyProps, IParamProps } from '../../../models/interfaces';

export const Atualizar = async(req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};