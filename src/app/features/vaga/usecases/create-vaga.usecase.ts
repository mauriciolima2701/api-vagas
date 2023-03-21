import { VagaRepository } from "./../repositories/vaga.repository";
import { Vaga } from "./../../../models/vaga.model";
import { TipoUser } from "../../../models/user.model";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";
interface CreateVagaDTO {
  descricao: string;
  empresa: string;
  dtLimite: Date;
  ativo: boolean;
  idRecrutador: string;
  maxCandidatos?: number;
}

export class CreateVagaUseCase {
  constructor(
    private repository: VagaRepository,
    private userRepository: UsuarioRepository
  ) {}

  public async execute(data: CreateVagaDTO) {
    const vaga = new Vaga(
      data.descricao,
      data.empresa,
      data.dtLimite,
      data.ativo,
      recrutador,
      data.maxCandidatos
    );
    console.log(vaga);
    const result = await this.repository.create(vaga);
    console.log(result);

    return result.toJson();
  }
}
