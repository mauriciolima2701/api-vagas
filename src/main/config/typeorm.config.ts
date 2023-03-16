import { DataSource } from "typeorm";
import { appEnv } from "../../app/envs/app.env";
import { candidatoVagaEntity } from "../../app/shared/entities/candidatoVaga.entity";
import { UserEntity } from "../../app/shared/entities/user.entity";
import { vagaEntity } from "../../app/shared/entities/vaga.entity";
import { CreateTableUser1678145531920 } from "../../app/shared/migrations/1678145531920-CreateTableUser";
import { CreateTableVaga1678145600307 } from "../../app/shared/migrations/1678145600307-CreateTableVaga";
import { CreateTableCandidatoVaga1678148446733 } from "../../app/shared/migrations/1678148446733-CreateTableCandidatoVaga";

export default new DataSource({
	type: "postgres",
	url: appEnv.dbUrl,
	entities: [candidatoVagaEntity, UserEntity, vagaEntity],
	migrations: [
		CreateTableUser1678145531920,
		CreateTableVaga1678145600307,
		CreateTableCandidatoVaga1678148446733,
	],
	synchronize: false,
	ssl: {
		rejectUnauthorized: false,
	},
});
