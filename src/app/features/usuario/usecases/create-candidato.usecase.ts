import { Candidato } from "../../../models/candidato.model";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { UsuarioRepository } from "../repositories/usuario.repository";

interface CreateCandidatoDTO {
	username: string;
	senha: string;
	nome: string;
}

export class CreateCandidatoUseCase {
	constructor(private repository: UsuarioRepository) {}

	public async execute(data: CreateCandidatoDTO) {
		const candidato = new Candidato(data.nome, data.username, data.senha);

		const cacheRepository = new CacheRepository();

		const cache: any[] = (await cacheRepository.get("LIST_APPLICANT")) ?? [];

		await cacheRepository.set("LIST_APPLICANT", [...cache, candidato]);

		const result = await this.repository.criaUsuario(candidato);

		return result.toJson();
	}
}
