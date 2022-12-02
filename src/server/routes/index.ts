import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá mundo!');
});

router.post('/teste', (req, res) => {
    return res.status(StatusCodes.OK).json(req.body);
});

//Cidades
router.post('/cidades',
    CidadesController.createValidation,
    CidadesController.adicionar
);

export { router };