import { TipoUser, User } from "./user.model";

export class Admin extends User {
	constructor(nome: string, username: string, senha: string) {
		super(nome, username, senha, TipoUser.Admin);
	}

	public toJsonAdmin() {
		return {
			nome: this.nome,
			username: this.username,
			senha: this.senha,
			tipo: this.tipo,
			id: this.id,
		};
	}
}
