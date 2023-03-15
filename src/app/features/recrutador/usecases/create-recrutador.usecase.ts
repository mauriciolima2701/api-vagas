import { Recrutador } from '../../../models/recrutador.model';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';

interface CreateRecrutadorDTO {
    username: string;
    senha: string;
    nome: string;
    nomeEmpresa: string;
}

export class CreateRecrutadorUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute(data: CreateRecrutadorDTO) {
        const recrutador = new Recrutador(data.nome, data.username, data.senha, data.nomeEmpresa);
        const result = await this.repository.criaUsuario(recrutador);

        return result.toJson();
    }
}
