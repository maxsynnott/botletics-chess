import { Game } from "src/entities/Game";
import { Chess } from "chess.js";

export default class GameService {
	static run(game: Game) {
		const [initialFen] = game.history;

		const chess = new Chess(initialFen);

		while (!chess.game_over()) {
			const possibleMoves = chess.moves();
			const randMove =
				possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
			chess.move(randMove);
			game.history.push(chess.fen());
		}

		game.save();
	}
}
