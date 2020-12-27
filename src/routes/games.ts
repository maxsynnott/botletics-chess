import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

import { Game } from "../entities/Game";

router.get("/", async (_: Request, res: Response) => {
	const games = await Game.find();
	res.json(games);
});

router.post("/:id/run", async (req: Request, res: Response) => {
	const { id } = req.params;
	const game = await Game.findOne(+id);
	await game?.run();
	res.json(game);
});

router.post("/", async (_: Request, res: Response) => {
	const game = new Game();
	game.whitePlayerId = 1;
	game.blackPlayerId = 2;
	game.history = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"];
	await game.save();

	res.json(game);
});

export default router;
