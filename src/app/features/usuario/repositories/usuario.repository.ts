import { DataBaseConnection } from "../../../../main/database/typeorm.connection";
import { UserEntity } from "../../../shared/entities/user.entity";

export class UsuarioRepository {
  private _repository = DataBaseConnection.connection.getRepository(UserEntity);

  public async obtemPorUserName(username: string): Promise<UserEntity | null> {
    return await this._repository.findOne({
      where: {
        username,
      },
    });
  }
}
