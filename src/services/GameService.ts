import { Game } from "src/entities/Game";
import { Chess } from "chess.js";
import axios from "axios";

const fetchMove = async (endpoint: string, payload: { fen: string }) => {
	return axios.post(endpoint, payload).then((response) => response.data.move);
};

export default class GameService {
	static async run(game: Game) {
		const whitePlayerEndpoint = "http://localhost:10000/move";
		const blackPlayerEndpoint = "http://localhost:10000/move";

		const [initialFen] = game.history;

		const chess = new Chess(initialFen);

		while (!chess.game_over()) {
			const endpoint =
				chess.turn() === "w" ? whitePlayerEndpoint : blackPlayerEndpoint;
			const move = await fetchMove(endpoint, { fen: chess.fen() });
			chess.move(move);
			game.history.push(chess.fen());
		}

		game.save();
	}
}
