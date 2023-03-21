import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class FindAllUsuarioUseCase {
  constructor(private repository: UsuarioRepository) {}

  public async execute() {
    const cacheRepository = new CacheRepository();

    const cache = JSON.parse(await cacheRepository.get("LIST_USERS"));

    if (cache) {
      console.table(cache);

      return cache;
    }

    const result = await this.repository.getAll();

    if (!result) {
      return null;
    }

    await cacheRepository.setEX("LIST_USERS", JSON.stringify(result), 60);
    console.table(result);
    return result;
  }
}
