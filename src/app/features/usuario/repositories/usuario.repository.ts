import { DataBaseConnection } from '../../../../main/database/typeorm.connection';
import { User } from '../../../models/user.model';
import { UserEntity } from '../../../shared/entities/user.entity';

export class UsuarioRepository {
    private _repository = DataBaseConnection.connection.getRepository(UserEntity);

    public async criaUsuario(user: User) {
        const usuarioEntidade = this._repository.create({
            id: user.id,
            nome: user.nome,
            nomeEmpresa: user.nomeEmpresa,
            senha: user.senha,
            username: user.username,
            tipo: user.tipo,
        });
        const result = await this._repository.save(usuarioEntidade);

        return this.mapEntityToModel(result);
    }

    public async obtemPorUserName(username: string): Promise<UserEntity | null> {
        return await this._repository.findOne({
            where: {
                username,
            },
        });
    }

    private mapEntityToModel(entity: UserEntity) {
        return User.create(
            entity.id,
            entity.nome,
            entity.username,
            entity.senha,
            entity.tipo,
            entity.nomeEmpresa
        );
    }
}
