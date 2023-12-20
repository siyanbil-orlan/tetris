import Command from './command.js'

export default class MoveRightCommand extends Command {
    constructor(tetrisGame) {
        super();
        this.tetrisGame = tetrisGame;
    }

    execute() {
        this.tetrisGame.movePieceRight();
    }
}