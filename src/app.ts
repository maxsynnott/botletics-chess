const app = require("express")();
const { Game } = require("./db/models");

app.get("/games", async (req: any, res: any) => {
	const games = await Game.findAll();
	res.json(games);
});

app.listen(8080);
