import { Recrutador } from "../../../models/recrutador.model";
import { TipoUser } from "../../../models/user.model";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { HttpHelper } from "../../../shared/util/http.helper";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";

interface CreateRecruiterDTO {
  username: string;
  senha: string;
  nome: string;
  nomeEmpresa: string;
  tipo: TipoUser;
}

export class CreateRecruiterUseCase {
  constructor(private repository: UsuarioRepository) {}

  public async execute(data: CreateRecruiterDTO) {
    const { username, senha, nome, nomeEmpresa } = data;

    const recruiter = new Recrutador(
      nome,
      username,
      senha,
      nomeEmpresa,
      "R" as TipoUser
    );

    const cacheRepository = new CacheRepository();

    const cache: any[] = (await cacheRepository.get("LIST_RECRUITERS")) ?? [];

    // await cacheRepository.set("LIST_RECRUITERS", [...cache, recruiter]);

    const result = await this.repository.criaUsuario(recruiter);

    if (!result) throw new Error("User not created!");

    return recruiter.toJson();
  }
}
