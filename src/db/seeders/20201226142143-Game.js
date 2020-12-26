"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.bulkInsert("Games", [
			{
				white_player_id: 1,
				black_player_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				white_player_id: 3,
				black_player_id: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.bulkDelete("Games", {});
	},
};
