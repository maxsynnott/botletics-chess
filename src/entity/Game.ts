import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Game extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	whitePlayerId: number;

	@Column()
	blackPlayerId: number;

	@Column("text", {
		array: true,
	})
	history: string[];
}
