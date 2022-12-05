import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const Adicionar: RequestHandler = async(req, res) => {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.');
};