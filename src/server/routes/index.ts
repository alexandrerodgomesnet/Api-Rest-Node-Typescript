import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

//Cidades
router.post('/cidades', CidadesController.AdicionarValidation, CidadesController.Adicionar);
router.get('/cidades', CidadesController.ListarValidation, CidadesController.Listar);
router.get('/cidades/:id', CidadesController.ObterValidation, CidadesController.Obter);
router.put('/cidades/:id', CidadesController.AtualizarValidation, CidadesController.Atualizar);
router.delete('/cidades/:id', CidadesController.ExcluirValidation, CidadesController.Excluir);

export { router };