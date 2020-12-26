import "reflect-metadata";
import { createConnection } from "typeorm";

import express from "express";
import routes from "./routes";

createConnection()
	.then(() => {
		const app = express();

		Object.entries(routes).forEach(([path, router]) => app.use(path, router));

		app.listen(8080);
	})
	.catch((error) => console.log(error));
