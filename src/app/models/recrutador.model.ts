import { TipoUser, User } from "./user.model";

export class Recrutador extends User {
	constructor(
		nome: string,
		username: string,
		senha: string,
		nomeEmpresa: string,
		tipo: TipoUser
	) {
		super(nome, username, senha, tipo, nomeEmpresa);
	}
}
