import { CreateRecrutadorUseCase } from './../usecases/create-recrutador.usecase';
import { Request, Response } from 'express';

import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';
import { HttpHelper } from '../../../shared/util/http.helper';

export class RecrutadorController {
    public async create(req: Request, res: Response) {
        try {
            const usecase = new CreateRecrutadorUseCase(new UsuarioRepository());
            const result = await usecase.execute(req.body);

            return HttpHelper.sucess(res, result, 'Recrutador criado com sucesso.');
        } catch (error: any) {
            return HttpHelper.serverError(res, error.toString());
        }
    }
}
