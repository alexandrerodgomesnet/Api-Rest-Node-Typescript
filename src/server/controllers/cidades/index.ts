import * as listar from './Listar';
import * as obter from './Obter';
import * as adicionar from './Adicionar';
import * as atualizar from './Atualizar';
import * as excluir from './Excluir';

export const CidadesController = {
    ...listar,
    ...obter,
    ...adicionar,
    ...atualizar,
    ...excluir
};