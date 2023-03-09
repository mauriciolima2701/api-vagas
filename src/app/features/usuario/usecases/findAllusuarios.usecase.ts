import { UsuarioRepository } from '../repositories/usuario.repository';

export class FindAllUsuarioUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute() {
        const result = await this.repository.getAll();

        if (!result) {
            return null;
        }

        return result;
    }
}
