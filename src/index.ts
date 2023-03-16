import { RedisConnection } from "./main/database/redis.connection";
import { DataBaseConnection } from "./main/database/typeorm.connection";
import { runServer } from "./main/server/express.server";

Promise.all([DataBaseConnection.connect(), RedisConnection.connect()]).then(
	runServer
);
